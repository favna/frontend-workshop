import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lists')({
  component: Lists,
})

function Lists() {
  const someList = ['one', 'two', 'three']

  return (
    <div>
      {someList.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
