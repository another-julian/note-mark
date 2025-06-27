import { JSX } from 'react'

export default function View(): JSX.Element {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="text-4xl text-blue-500">Hello from electron</span>
    </div>
  )
}
