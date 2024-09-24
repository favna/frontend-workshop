import { useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ref')({
  component: Refs,
})

function Refs() {
  const el = useRef(null)

  function log() {
    if (el.current) {
      alert(el.current.innerText)
    }
  }

  return (
    <>
      <h1 ref={el}>Element with a ref</h1>
      <button onClick={log}>Click me to get an alert!</button>
    </>
  )
}
