import React, { useState } from 'react'
import PC from './pc'
import { useTrail, animated, config } from "react-spring";

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
        <PC />
      </div>
      <div className="entrance__center">
        <div className="entrance__center--title" onMouseEnter={e => setEnter(true)} onMouseLeave={e => setEnter(false)} >
          {trails.map((trail, idx) => (
            // <animated.span style={{ ...trail,
            //   transform: trail.x
            //   .interpolate({
            //     range: [0,1],
            //     output: ["0deg", "360deg"]
            //   })
            //   .interpolate(x => `rotateX(${x})`)
            // }}>
            <animated.span style={{ ...trail
            }}>
              {title[idx]}
            </animated.span>
          ))}
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