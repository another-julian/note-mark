import { cn } from '@app/lib/utils'
import { ComponentProps, forwardRef } from 'react'

const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...rest}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
export default Content
