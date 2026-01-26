/**
 * Centralized API fetch utility with type safety, error handling, and retry logic.
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

interface FetchOptions extends RequestInit {
  retries?: number
  retryDelay?: number
}

/**
 * Wrapper around fetch with standardized error handling and optional retry logic.
 */
export async function apiFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { retries = 0, retryDelay = 1000, ...fetchOptions } = options

  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new ApiError(
          data.error || `Request failed with status ${response.status}`,
          response.status,
          data
        )
      }

      return data as T
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      // Don't retry on client errors (4xx)
      if (error instanceof ApiError && error.status >= 400 && error.status < 500) {
        throw error
      }

      // Only retry if we have attempts left
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)))
      }
    }
  }

  throw lastError || new Error('Request failed')
}

/**
 * POST request helper
 */
export async function apiPost<T, D = unknown>(
  url: string,
  data: D,
  options: Omit<FetchOptions, 'method' | 'body'> = {}
): Promise<T> {
  return apiFetch<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * GET request helper
 */
export async function apiGet<T>(
  url: string,
  options: Omit<FetchOptions, 'method' | 'body'> = {}
): Promise<T> {
  return apiFetch<T>(url, {
    ...options,
    method: 'GET',
  })
}

// Checkout API types
export interface CreateCheckoutSessionRequest {
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  currency: string
  trackingParams: Record<string, string | undefined>
  cookieData: Record<string, unknown> | null
  addOns: string[]
}

export interface CreateCheckoutSessionResponse {
  clientSecret: string
  paymentIntentId: string
}

export interface UpdateCheckoutAmountRequest {
  paymentIntentId: string
  currency: string
  addOns: string[]
}

export interface RecoverPaymentResponse {
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  clientSecret?: string
  addOns?: string[]
  error?: string
}

// Checkout API functions
export const checkoutApi = {
  createSession: (data: CreateCheckoutSessionRequest) =>
    apiPost<CreateCheckoutSessionResponse>('/api/checkout-v2/session', data),

  updateAmount: (data: UpdateCheckoutAmountRequest) =>
    apiPost<{ success: boolean }>('/api/checkout-v2/update', data),

  recoverPayment: (paymentIntentId: string) =>
    apiGet<RecoverPaymentResponse>(`/api/checkout-v2/recover?payment_intent=${paymentIntentId}`),
}

// Coaching checkout API types
export interface CoachingDetails {
  customerName: string
  customerEmail: string
  stripeCustomerId: string
  tier: string
  coach: string
  amount: number
  productName: string
  productDescription: string
  sixMonthCommitment: boolean
  customerDiscount: string
  discountAmount: number
  sixMonthDiscountAmount: number
  isSplitPayment: boolean
  paymentNumber: string
  totalPayments: string
  secondPaymentAmount: number
  secondPaymentDueDays: number
  isSubscriptionPayment: boolean
  monthlyAmount: number
}

// Coaching checkout API functions
export const coachingApi = {
  getDetails: (intentId: string, isSetupIntent: boolean) =>
    apiGet<CoachingDetails>(
      isSetupIntent
        ? `/api/coaching-checkout/details?setup=${intentId}`
        : `/api/coaching-checkout/details?pi=${intentId}`
    ),

  updateBillingAddress: (data: {
    paymentIntentId?: string
    setupIntentId?: string
    billingAddress: {
      city: string
      country: string
      line1: string
      line2: string
      postal_code: string
      state: string
    }
  }) => apiPost<{ success: boolean }>('/api/coaching-checkout/update-address', data),

  saveSplitPayment: (data: {
    customerEmail: string
    customerName: string
    stripeCustomerId: string
    firstPaymentIntentId: string
    firstPaymentAmount: number
    secondPaymentAmount: number
    tier: string
    coach: string
    sixMonthCommitment: boolean
  }) => apiPost<{ success: boolean }>('/api/coaching-checkout/save-split-payment', data),

  createSubscription: (setupIntentId: string) =>
    apiPost<{ subscriptionId: string }>('/api/coaching-checkout/create-subscription', {
      setupIntentId,
    }),
}
