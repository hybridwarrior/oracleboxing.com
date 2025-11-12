'use client'

import { TracksuitSize } from '@/lib/tracksuit-config'

interface SizeSelectorProps {
  selectedSize: TracksuitSize
  onSizeChange: (size: TracksuitSize) => void
}

const sizes: TracksuitSize[] = ['XS', 'S', 'M', 'L', 'XL']

export function SizeSelector({ selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-white">Size</label>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => {
          const isSelected = selectedSize === size
          return (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`
                px-4 py-3 rounded-lg font-medium transition-all text-sm
                ${
                  isSelected
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                }
              `}
              aria-label={`Select size ${size}`}
            >
              {size}
            </button>
          )
        })}
      </div>
    </div>
  )
}
