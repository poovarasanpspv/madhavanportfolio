import React from 'react'
import exp1 from './images/exp1.svg';
import exp2 from './images/exp2.svg';
import exp3 from './images/exp3.svg';
import exp4 from './images/exp4.svg';
import exp5 from './images/exp5.svg';
import pic from './images/madhavan.png';
import Typed from 'typed.js';

function Herobanner() {

  setTimeout(()=> {
    new Typed(".typed-text", {
      strings: ["", "UIUX Designer", "Graphics Designer", "Web Designer", "Web Developer"],
       typeSpeed: 170,
       backSpeed: 150,
       loop: true,
       cursorChar: '',
   });
}, 3000);

  return (
    <div className='hero-banner-box-section px-3 scroll-by-section' id='section-1'>
      <div className="container-fluid" id='aboutid'>
        <div className="row justify-content-md-between">
            <div className="col-sm-12 col-md-7 hero-banner-text">
                <h1>Hi,I'm Madhavan</h1>
                <h2 className='about-text-heading'>I’m a
                  <span className='typed-text typed-text-color'></span>
                </h2>
                <p>I am a versatile UI/UX Designer with extensive expe-
                  rience in corporate and freelance settings. Currently,
                  I work at a leading software development company
                  in Chennai, collaborating with satellite companies in
                  the USA and Canada, and have designed over 10
                  projects across various industries. At Metapyra, a
                  startup subsidiary of Pyramidion, I created UI flows,
                  designed posters, developed 3D office environments,
                  and managed social media accounts. As a freelan-
                  cer, I have produced over 3,000 designs and am
                  currently writing a book on logo design and storyte
                </p>
                <div className="get-touch-you">
                  <a href="#"> Get in Touch</a>
                  <a href="#" className="color-fill"> Resume</a>
                </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <img src={pic} alt="" className='pic-roundimg'/>
            </div>
        </div>
      </div>

      {/* export icons section */}

      <section className='my-md-5 section-expit'>
        <div className="container">
          <h2 className='my-4'>EXPERIENCE WITH</h2>
          <div className="icons">
            <img alt="alt" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="icon-exp-img" src={exp1} />
            <img alt="alt" loading="lazy" width="50" height="45" decoding="async" data-nimg="1" className="icon-exp-img" src={exp2} />
            <img alt="alt" loading="lazy" width="50" height="45" decoding="async" data-nimg="1" className="icon-exp-img" src={exp3} />
            <img alt="alt" loading="lazy" width="50" height="45" decoding="async" data-nimg="1" className="icon-exp-img" src={exp4} />
            <img alt="alt" loading="lazy" width="50" height="45" decoding="async" data-nimg="1" className="icon-exp-img" src={exp5} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herobanner
