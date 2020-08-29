import React, { useState } from 'react'
import PC from './pc'
import { useTrail, animated, config } from "react-spring";

type Props = {

}

const Entrance: React.FC<Props> = () => {
  const msg = "Hello React Spring";
  const [{ x, y }, setXY] = useState({ x: 0, y: 0 });
  const trails = useTrail(msg.length, {
    config: config.gentle,
    left: `${x}px`,
    top: `${y}px`,
    position: "absolute"
  });

  return (
    <div className="entrance">
      <div className="entrance__left">
        <PC />
      </div>
      <div className="entrance__center">
        <div className="entrance__center--title">
          Portfolio
          <div className="entrance__center--line"></div>
        </div>
        <div className="entrance__center--button">
          <button>see more</button>
        </div>
      </div>
      <div className="entrance__right"></div>
    </div>
  )
}

export default Entrance