import React from 'react'
import { ProfileIcon, SkillIcon } from '../SvgReader'

type Props = {

}

const Profile: React.FC<Props> = () => {

  return (
    <div className="profile">
      <div className="profile__left">
        <div className="profile__left__icon">
          <ProfileIcon />
          <div className="profile__left__icon--title">about me</div>
        </div>
      </div>
      <div className="profile__right">
        <SkillIcon />
      </div>
    </div>
  )
}

export default Profile