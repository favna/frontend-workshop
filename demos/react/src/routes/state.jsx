import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/state')({
  component: State,
})

function State() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <form>
      <label htmlFor="checkbox">Click me!</label>
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
    </form>
  )
}
