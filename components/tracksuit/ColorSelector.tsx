'use client'

import { tracksuitConfig, TracksuitColor } from '@/lib/tracksuit-config'
import { Check } from 'lucide-react'

interface ColorSelectorProps {
  selectedColor: TracksuitColor
  onColorChange: (color: TracksuitColor) => void
}

export function ColorSelector({ selectedColor, onColorChange }: ColorSelectorProps) {
  const colors = Object.entries(tracksuitConfig.colors)

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-white">Color</label>
      <div className="grid grid-cols-4 gap-3">
        {colors.map(([colorName, colorData]) => {
          const isSelected = selectedColor === colorName
          return (
            <button
              key={colorName}
              onClick={() => onColorChange(colorName as TracksuitColor)}
              className={`
                relative aspect-square rounded-lg border-2 transition-all
                ${isSelected ? 'border-white scale-105' : 'border-gray-700 hover:border-gray-500'}
              `}
              style={{
                background: `linear-gradient(135deg, ${colorData.hex} 0%, ${colorData.darkHex} 100%)`,
              }}
              aria-label={`Select ${colorName}`}
            >
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                </div>
              )}
              <span className="sr-only">{colorName}</span>
            </button>
          )
        })}
      </div>
      <p className="text-xs text-gray-400 mt-2">Selected: {selectedColor}</p>
    </div>
  )
}
