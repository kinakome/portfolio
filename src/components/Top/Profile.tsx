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
        <div className="profile__left--contents">
          name: 松岡　諒
          1994年生まれの26才です。
          経歴
          大学時代：大学2年生でプログラミングを始めました。在学中はサークルおよび個人でのアプリケーション開発の他に、プログラミングスクールでインターンを1年半ほど行っていました。
        </div>
      </div>
      <div className="profile__right">
        <SkillIcon />
      </div>
    </div>
  )
}

export default Profile