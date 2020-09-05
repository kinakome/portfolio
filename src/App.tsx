import React from 'react'
import './style/style.scss'
import Entrance from './components/Entrance'
import Top from './components/Top'
import Skill from './components/Skill'
import Header from './components/Header'
import Works from './components/Works'

import { ReactGenieAnimations } from "react-genie-styled-components";


type Props = {

}

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <ReactGenieAnimations />
      <Header />
      <Entrance /> 
      <Top />
      <Skill />
      <Works />

    </div>
  )
}

export default App
