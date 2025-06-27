import { cn } from '@app/lib/utils'
import { ButtonHTMLAttributes, JSX, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export default function Button({ children, className, ...rest }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        'cursor-pointer px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
