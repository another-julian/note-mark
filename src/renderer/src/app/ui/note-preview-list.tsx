import { noteMocks } from '@app/store/mocks'
import { ComponentProps, JSX } from 'react'
import { cn } from '../lib/utils'
import NotePreview from './note-preview'

export default function NotePreviewList({
  className,
  ...props
}: ComponentProps<'ul'>): JSX.Element {
  if (noteMocks.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No notes yet</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {noteMocks.map((note) => (
        <li key={note.id}>
          <NotePreview {...note} />
        </li>
      ))}
    </ul>
  )
}
