import React from 'react'
import Nav from './Top/Nav'
import Profile from './Top/Profile'

type Props = {

}

const Top: React.FC<Props> = () => {

  return (
    <div className="top">
      <div className="top__box">    
        <Nav />
        <div className="top__box--content">
          <Profile />
        </div>
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