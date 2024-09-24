import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/effect')({
  component: Effect,
})

function Effect() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      const json = await result.json()
      setTodos(json)
    }

    fetchTodos()
  }, [])

  return (
    <>
      <h1>Here are you TODO items:</h1>
      <code>
        <pre>{JSON.stringify(todos, null, 4)}</pre>
      </code>
    </>
  )
}
