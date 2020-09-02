import React from 'react'
import { ProfileIcon } from '../SvgReader'
import { Link } from 'react-scroll';

type Props = {

}

const Profile: React.FC<Props> = () => {

  return (
    <div className="profile">
      <div className="profile__icon">
        <ProfileIcon />
        <div className="profile__icon--title">About Me</div>
      </div>
      <div className="profile__contents">
        <div className="profile__contents--name">松岡　諒</div>
        <div className="profile__contents--age">1994年生まれ 26歳</div>
        <div className="profile__contents--history">大学2年生でプログラミングを始めました。<br/>
          在学中はサークルおよび個人でのアプリケーション開発の他に、プログラミングスクールでインターンを1年半ほど行っていました。<br/>
          現在はSIerにてAzureの構築やアプリケーション制作・製品導入を行いつつ、空いた時間で個人開発を行っています。
        </div>
      </div>
      <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            duration= {800}
          >
        <div className="profile__button">
          <div className="profile__button--arrow"></div>
        </div>
      </Link> 
    </div>
  )
}

export default Profile