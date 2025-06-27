import { cn } from '@app/lib/utils'
import { ComponentProps, JSX } from 'react'

export default function Root({
  children,
  className,
  ...rest
}: ComponentProps<'main'>): JSX.Element {
  return (
    <main className={cn('flex flex-row h-screen w-full', className)} {...rest}>
      {children}
    </main>
  )
}
