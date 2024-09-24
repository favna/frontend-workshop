import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/props')({
  component: Props,
})

function Props() {
  return (
    <>
      <Button onClick={() => console.log('Clicked!')} label="Click me!" />
    </>
  )
}

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.label}</button>
  )
}
