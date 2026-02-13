import { NextResponse } from 'next/server';
import { ZodError, type ZodType } from 'zod';

interface ValidationSuccess<T> {
  success: true;
  data: T;
}

interface ValidationFailure {
  success: false;
  response: NextResponse;
}

type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

export function badRequest(message: string, issues?: unknown): NextResponse {
  return NextResponse.json(
    {
      error: message,
      ...(issues ? { issues } : {}),
    },
    { status: 400 }
  );
}

export async function validateJsonBody<T>(
  request: Request,
  schema: ZodType<T>
): Promise<ValidationResult<T>> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return { success: false, response: badRequest('Invalid JSON body') };
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return {
      success: false,
      response: badRequest('Invalid request payload', parsed.error.flatten()),
    };
  }

  return { success: true, data: parsed.data };
}

export function formatZodError(error: ZodError): unknown {
  return error.flatten();
}
