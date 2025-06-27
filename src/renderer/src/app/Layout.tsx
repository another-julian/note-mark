import { JSX, ReactNode } from 'react'

import Content from '@app/ui/content'
import Root from '@app/ui/root'
import Sidenav from '@app/ui/sidenav'
import DraggableTopBar from '@renderer/app/ui/draggable-top-bar'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <Root>
        <Sidenav className="p-2" />
        <Content className="border-l bg-zinc-900/50 border-l-white/20">{children}</Content>
      </Root>
    </>
  )
}
