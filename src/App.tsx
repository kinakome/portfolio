import React from 'react'

type Props = {
  message: string
}

const Child: React.FC<Props> = props => {
  return (
    <p>{ props.message }</p>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Child message="子のコンポーネントに渡す" />
    </div>
  )
}

export default App