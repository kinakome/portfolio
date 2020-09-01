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
        <div className="profile__left__contents">
          <div className="profile__left__contents--name">松岡　諒</div>
          <div className="profile__left__contents--age">1994年生まれ26才</div>
          <div className="profile__left__contents--history">大学2年生でプログラミングを始めました。<br/>
            在学中はサークルおよび個人でのアプリケーション開発の他に、プログラミングスクールでインターンを1年半ほど行っていました。<br/>
            現在はSIerにてAzureの構築やアプリケーション制作・製品導入を行いつつ、空いた時間で個人開発を行っています。
          </div>
        </div>
      </div>
      <div className="profile__right">
        <SkillIcon />
      </div>
    </div>
  )
}

export default Profile