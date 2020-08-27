import React from 'react'

type Props = {

}

// 関数コンポーネント（returnに表示するhetmlをかく）
const Top: React.FC<Props> = () => {

  return (
    <div className="entrance">
      <div className="entrance__left">
      </div>
      <div className="entrance__center"></div>
      <div className="entrance__right"></div>
    </div>
  )
}

export default Top