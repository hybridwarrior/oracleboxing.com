'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { tracksuitConfig } from '@/lib/tracksuit-config'
import { Ruler } from 'lucide-react'

export function SizeGuideModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
          <Ruler className="w-4 h-4" />
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Size Guide</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Size chart */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Size</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Chest (cm)</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Waist (cm)</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Hips (cm)</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Inseam (cm)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(tracksuitConfig.sizeGuide).map(([size, measurements]) => (
                  <tr key={size} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{size}</td>
                    <td className="py-3 px-4 text-gray-300">{measurements.chest}</td>
                    <td className="py-3 px-4 text-gray-300">{measurements.waist}</td>
                    <td className="py-3 px-4 text-gray-300">{measurements.hips}</td>
                    <td className="py-3 px-4 text-gray-300">{measurements.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fit notes */}
          <div className="space-y-3 bg-gray-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-white">Fit Notes</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• {tracksuitConfig.fit}</li>
              <li>• Heavyweight 100% cotton with relaxed athletic silhouette</li>
              <li>• If between sizes, size up for a more relaxed fit</li>
              <li>• Model is 6'0" (183cm), 165 lbs (75kg) wearing size M</li>
            </ul>
          </div>

          {/* How to measure */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white">How to Measure</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-white">Chest:</strong> Measure around the fullest part of your chest
              </div>
              <div>
                <strong className="text-white">Waist:</strong> Measure around your natural waistline
              </div>
              <div>
                <strong className="text-white">Hips:</strong> Measure around the fullest part of your hips
              </div>
              <div>
                <strong className="text-white">Inseam:</strong> Measure from crotch to ankle
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
