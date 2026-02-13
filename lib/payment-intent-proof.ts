import {
  mintIntentToken,
  verifyIntentToken,
  type IntentTokenPurpose,
} from '@/lib/security/intent-token'

interface MintPaymentIntentProofParams {
  intentId: string
  purpose: IntentTokenPurpose
  customerEmail?: string | null
  ttlSeconds?: number
}

interface VerifyPaymentIntentProofParams {
  token: string
  intentId: string
  purpose: IntentTokenPurpose
  customerEmail?: string | null
}

export function mintPaymentIntentProof(params: MintPaymentIntentProofParams) {
  return mintIntentToken(params)
}

export function verifyPaymentIntentProof(params: VerifyPaymentIntentProofParams) {
  return verifyIntentToken(params)
}
