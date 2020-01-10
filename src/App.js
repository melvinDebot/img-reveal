import React, {useRef, useEffect, useState} from 'react';
import './App.scss';
import Background from './assets/background.jpg';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";


function App() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  const [state, setState] = useState({
    isActive1 : true,
    isActive2 : false
  })

  useEffect(() => {
    tl.to(container, 0, 
      {css : 
        {visibility:"visible"}
      })
      .to(imageReveal,1.4, {
        width:'0%',
        ease: Power2.easeInOut
      })
      .from(image,1.4,{
        scale:1.6,
        ease: Power2.easeInOut,
        delay: -1.6
      })
  })
  return (
    <section className="main">
      <div className="container" ref={el => container = el}>
        <>
          <div className="img-container">
            <img src={Background} ref={el => image = el} alt="img "/>
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
