'use client'

import { ReactNode, HTMLAttributes } from 'react'

interface TechCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TechCard({
  children,
  interactive = false,
  size = 'md',
  className = '',
  ...props
}: TechCardProps) {
  const sizeClass = size !== 'md' ? `tech-card--${size}` : ''
  const interactiveClass = interactive ? 'tech-card--interactive' : ''

  return (
    <div
      className={`tech-card ${interactiveClass} ${sizeClass} ${className}`}
      {...props}
    >
      <div className="tech-card-content">
        {children}
      </div>
    </div>
  )
}

export default TechCard
