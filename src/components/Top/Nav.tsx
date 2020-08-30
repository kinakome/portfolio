import React from 'react'

type Props = {

}

const Top: React.FC<Props> = () => {

  return (
    <div className="nav">
      <button className="nav__button first selected">Profile</button>
      <button className="nav__button">Works</button>
      <button className="nav__button">Photo</button>
    </div>
  )
}

export default Top