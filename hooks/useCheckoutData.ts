/**
 * SWR-based hooks for checkout data fetching
 * Provides caching, deduplication, and automatic revalidation
 */

import useSWR from 'swr'
import { apiGet, CoachingDetails } from '@/lib/api'

// Generic fetcher for SWR
const fetcher = <T>(url: string) => apiGet<T>(url)

/**
 * Hook for fetching coaching checkout details
 * Caches the response and handles loading/error states
 */
export function useCoachingDetails(intentId: string | null, isSetupIntent: boolean) {
  const endpoint = intentId
    ? isSetupIntent
      ? `/api/coaching-checkout/details?setup=${intentId}`
      : `/api/coaching-checkout/details?pi=${intentId}`
    : null

  const { data, error, isLoading, mutate } = useSWR<CoachingDetails>(
    endpoint,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      dedupingInterval: 60000, // 1 minute cache
    }
  )

  return {
    details: data,
    isLoading,
    error: error?.message,
    refresh: mutate,
  }
}

/**
 * Hook for recovering failed payment sessions
 */
export function usePaymentRecovery(paymentIntentId: string | null) {
  const { data, error, isLoading } = useSWR(
    paymentIntentId ? `/api/checkout-v2/recover?payment_intent=${paymentIntentId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  return {
    recovery: data,
    isLoading,
    error: error?.message,
  }
}

interface LocationData {
  currency: string
  country: string
}

/**
 * Hook for currency detection with caching
 */
export function useCurrencyDetection() {
  const { data, error, isLoading } = useSWR<LocationData>(
    '/api/detect-location',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 300000, // 5 minute cache
      fallbackData: { currency: 'USD', country: 'US' },
    }
  )

  return {
    currency: data?.currency || 'USD',
    country: data?.country || 'US',
    isLoading,
    error: error?.message,
  }
}
