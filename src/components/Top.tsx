import React from 'react'
import { useTrail, animated, config } from "react-spring";
import Nav from './Top/Nav'

type Props = {

}

const Top: React.FC<Props> = () => {

  return (
    <div className="top">
      <div className="top__box">    
      <Nav />
        <div className="top__box--bottom"></div> 
      </div>
      <div className="top__foot">    
        <div className="top__foot--up"></div>
        <div className="top__foot--bottom"></div>
      </div>
    </div>
  )
}

export default Top