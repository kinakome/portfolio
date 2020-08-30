import React from 'react'
import './style/style.scss'
import Entrance from './components/Entrance'
import Top from './components/Top'
import { ReactGenieAnimations } from "react-genie-styled-components";


type Props = {

}

const App: React.FC = () => {
  return (
    <div>
      <ReactGenieAnimations />
      <Entrance />
      <Top />
    </div>
  )
}

export default App