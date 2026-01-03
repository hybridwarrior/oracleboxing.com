'use client'

import { ReactNode } from 'react'

interface TechBackgroundProps {
  children: ReactNode
  className?: string
}

export function TechBackground({ children, className = '' }: TechBackgroundProps) {
  return (
    <div className={`tech-app-bg ${className}`}>
      <div className="tech-content">
        {children}
      </div>
    </div>
  )
}

export default TechBackground
