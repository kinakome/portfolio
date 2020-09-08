import  React , { useEffect }from 'react'
import './style/style.scss'
import Entrance from './components/Entrance'
import Top from './components/Top'
import Skill from './components/Skill'
import Header from './components/Header'
import Works from './components/Works'
import { ReactGenieAnimations } from "react-genie-styled-components";


const App: React.FC = () => {

  useEffect(() => {
    //マウスストーカー用のdivを取得
    const cursolInner = document.getElementById('cursol__inner');
    const cursolOut = document.getElementById('cursol__outside');

    //aタグにホバー中かどうかの判別フラグ
    let hovFlag = false;
    //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
    document.addEventListener('mousemove', function (e) {
      if (!hovFlag) {
        cursolInner!.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        cursolOut!.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';

      }
    });
    const linkElem = document.querySelectorAll('.hover-elm');
    console.log(linkElem)

    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', () => {
        cursolInner?.classList.add('cursol__inner--hov');
        cursolOut?.classList.add('cursol__outside--hov');
        hovFlag = true;
        console.log(cursolInner?.classList)
      });

      linkElem[i].addEventListener('mouseout', () => {
        hovFlag = false;
        cursolInner?.classList.remove('cursol__inner--hov');
        cursolOut?.classList.remove('cursol__outside--hov');
        console.log(cursolInner?.classList)
      });
    }
  });
  
  return (
    <div className="wrapper">     
      <div id="cursol__inner"></div>
      <div id="cursol__outside"></div>
      <ReactGenieAnimations />
      <Entrance /> 
      <Top />
      <Header />
      <Skill />
      <Works />

    </div>
  )
}

export default App
