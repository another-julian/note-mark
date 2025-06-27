import { JSX, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col">
      <header>
        <h1>Note Mark</h1>
      </header>
      <main className="flex h-full w-full">{children}</main>
      <footer>
        <p>&copy; 2023 Note Mark</p>
      </footer>
    </div>
  )
}
