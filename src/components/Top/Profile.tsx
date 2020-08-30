import React from 'react'
import { ProfileIcon } from '../SvgReader'

type Props = {

}

const Profile: React.FC<Props> = () => {

  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileIcon />
      </div>
      <div className="profile__right"></div>
    </div>
  )
}

export default Profile