import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { Logo, Title, Button } from './SvgReader'
import BackgroundImg from '../images/entrance/entrance.png'

type Props = {

}

const Entrance: React.FC<Props> = () => {

  return (
    <div className="entrance">
      <div className="entrance__contents">
        <img src={BackgroundImg} alt="entrance" className="entrance__contents--background"></img>
        <Logo />
        <Title />
        <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration= {800}
            >
          <Button />
        </Link>
      </div>
      <div className="entrance__bottom">
      </div>
    </div>
  )
}

export default Entrance