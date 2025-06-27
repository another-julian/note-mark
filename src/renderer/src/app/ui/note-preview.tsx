import { NotePreviewProps } from '@app/lib/definitions'
import { JSX } from 'react'
import { cn, formatDateTime } from '../lib/utils'

export default function NotePreview({
  title,
  lastModified,
  isActive = false,
  className,
  ...props
}: NotePreviewProps): JSX.Element {
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        isActive ? 'bg-zinc-400/75' : 'hover:bg-zinc-500/75',
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs text-left">
        {formatDateTime(lastModified)}
      </span>
    </div>
  )
}
