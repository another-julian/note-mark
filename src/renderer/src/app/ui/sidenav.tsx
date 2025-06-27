import { cn } from '@app/lib/utils'
import NavButtons from '@app/ui/nav-buttons'
import NotePreviewList from '@app/ui/note-preview-list'
import { ComponentProps, JSX } from 'react'

export default function Sidenav({ className, ...rest }: ComponentProps<'aside'>): JSX.Element {
  return (
    <aside className={cn('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)} {...rest}>
      <NavButtons className="flex justify-between mt-1" />
      <div className="mt-3 ">
        <NotePreviewList className="space-y-1" />
      </div>
    </aside>
  )
}
