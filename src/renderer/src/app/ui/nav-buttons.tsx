import Button from '@app/ui/button'
import { ComponentProps, JSX } from 'react'

import { MdDeleteOutline, MdNoteAdd } from 'react-icons/md'

const buttons = [
  {
    name: 'Add note',
    icon: MdNoteAdd
  },
  {
    name: 'Delete note',
    icon: MdDeleteOutline
  }
]

export default function NavButtons({ ...props }: ComponentProps<'div'>): JSX.Element {
  return (
    <div {...props}>
      {buttons.map((button) => {
        const Icon = button.icon
        return (
          <Button key={button.name} title={button.name} aria-label={button.name}>
            <Icon className="w-4 h-4 text-zinc-300" />
          </Button>
        )
      })}
    </div>
  )
}
