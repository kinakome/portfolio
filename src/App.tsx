import React from 'react'
import './style/style.scss'
import Entrance from './components/Entrance'
import Top from './components/Top'


type Props = {

}

const App: React.FC = () => {
  return (
    <div>
      <Entrance />

      <Top />
    </div>
  )
}

export default App