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

    const cursolInner = document.getElementById('cursol__inner');
    const cursolOut = document.getElementById('cursol__outside');
    const cursol = document.getElementById('cursol');

    document.addEventListener('mousemove', function (e) {
      cursol!.style.transform = 'translate(' + (e.clientX - 4.5) + 'px, ' + (e.clientY  - 4.5) + 'px)';
      cursolInner!.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      cursolOut!.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
    const linkElem = document.querySelectorAll('.hover-elm');

    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', () => {
        cursolInner?.classList.add('hov_');
        cursolOut?.classList.add('hov_');
      });

      linkElem[i].addEventListener('mouseout', () => {
        cursolInner?.classList.remove('hov_');
        cursolOut?.classList.remove('hov_');
      });
    }
  });
  
  return (
    <div className="wrapper"> 
      <div id="cursol"></div>    
      <div id="cursol__inner"></div>
      <div id="cursol__outside"></div>
      <div className="wrapper__contents"> 
        <ReactGenieAnimations />
        <Entrance /> 
        <Top />
        <Header />
        <Skill />
        <Works />
      </div>
    </div>
  )
}

export default App
