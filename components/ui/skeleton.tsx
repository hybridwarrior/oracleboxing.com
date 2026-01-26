import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#F0EFED]",
        className
      )}
    />
  )
}

export function CheckoutFormSkeleton() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <Skeleton className="h-6 w-32" />

      {/* Name fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* Button */}
      <Skeleton className="h-14 w-full rounded-lg" />

      {/* Trust badges */}
      <div className="flex justify-center gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

export function PaymentFormSkeleton() {
  return (
    <div className="space-y-6 p-6">
      {/* Section header */}
      <Skeleton className="h-4 w-20" />

      {/* Payment method tabs */}
      <div className="flex gap-2">
        <Skeleton className="h-12 flex-1 rounded-lg" />
        <Skeleton className="h-12 flex-1 rounded-lg" />
      </div>

      {/* Card details */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-full rounded-lg" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>

      {/* Billing address header */}
      <Skeleton className="h-4 w-28 mt-8" />

      {/* Address fields */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-12 w-full rounded-lg" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>

      {/* Pay button */}
      <Skeleton className="h-14 w-full rounded-lg mt-6" />
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      {/* Image */}
      <Skeleton className="w-full sm:w-48 h-48 sm:h-32 rounded-lg" />

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-3/4 mb-4" />

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <Skeleton className="h-7 w-16" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export function OrderSummarySkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="h-4 w-28" />

      {/* Product card */}
      <Skeleton className="h-32 w-full rounded-xl" />

      {/* Customer info */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* What's included */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-32" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-56" />
        </div>
      </div>

      {/* Order total */}
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <Skeleton className="h-4 w-20" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
        <div className="flex justify-between pt-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
    </div>
  )
}
