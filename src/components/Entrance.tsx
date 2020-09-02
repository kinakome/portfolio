import React, { useState } from 'react'
import PC from './pc'
import { useTrail, useSpring, animated, config } from "react-spring";
import { Link } from 'react-scroll';
import { PCIcon, CameraIcon } from './SvgReader'

type Props = {

}

const Entrance: React.FC<Props> = () => {
  const title = "Portfolio";
  const [enter, setEnter] = useState(false);
  const trails = useTrail(title.length, {
    // config: config.gentle,
    // color: enter ? "white" : "black",
    fontSize: enter ? "24pt" : "48px",
    o: 1,
    from: { o: 0 },    // transform: enter ? "rotateX(360deg)" : "rotateX(0deg)",
  });

  return (
    <div className="entrance">
      <div className="entrance__left">
        <PCIcon />
      </div>
      <div className="entrance__center">
        <div className="entrance__center--title" onMouseEnter={e => setEnter(true)} onMouseLeave={e => setEnter(false)} >
          {trails.map((trail, idx) => (
            <animated.span style={{ ...trail
            }}>
              {title[idx]}
            </animated.span>
          ))}
        <div className="entrance__center--line"></div>
        </div>
        <div className="entrance__center--button">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration= {800}
          >
            <button>see more</button>
          </Link> 
        </div>
      </div>
      <div className="entrance__right">
        <CameraIcon />
      </div>
    </div>
  )
}

export default Entrance