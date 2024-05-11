import React from 'react'
import { Skeleton } from './ui/skeleton'
import { cn } from '@/lib/utils'

export default function SkeletonWrapper({ children, isLoading, fullWidth = true }: { children: React.ReactNode, isLoading: boolean, fullWidth?: boolean }) {
  if (!isLoading) return children
  return (
    <Skeleton className={cn(fullWidth && 'w-full')}>
      <div className='opacity-10'> {children}</div>
      
    </Skeleton>
  )
}
