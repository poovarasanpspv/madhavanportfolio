import React from 'react'
import linkin from './images/linkedin.svg';
import behance from './images/behance.svg';
import youtube from './images/youtube.svg';
import instagram from './images/instagram.svg';
// import xsvg from './images/x.svg';
function Footer() {
  return (
    <div>
      <footer id='contactid'>
        <div className="container">
            <div className="text-center">
                <h1>Get In Touch</h1>
                <p className='footer-text'>Ready to bring your ideas to life? Let's collaborate! Whether you're a startup, established company, or individual with a vision, I'm here to help. From concept to execution, let's create something amazing together</p>
                <p className='mt-2'> 
                  <a href="mailto:madhavan.official2001@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-mail fill-white stroke-black h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                     <span className='ps-2'>madhavan.official2001@gmail.com</span>
                    </a>
                </p>
                <p> <a href="tell:+91 6380419586">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-phone fill-white stroke-black h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span className='ps-2'>+91 6380419586 </span>
                    </a>
                </p>

                <div className=" social-icon mt-5"><a target="_blank" href="https://www.linkedin.com/in/madhavan-p-%F0%9F%9A%80-0b3777260/">
                <img loading="lazy" width="25" height="20" decoding="async" data-nimg="1" src={linkin} />
                </a><a target="_blank" href="https://www.behance.net/vijaymadhavan1">
                    <img loading="lazy" width="25" height="20" decoding="async" data-nimg="1" src={behance} />
                </a> 
                <a target="_blank" href="https://www.youtube.com/@ThoufiqM_">
                <img loading="lazy" width="25" height="20" decoding="async" data-nimg="1" src={youtube} />
                </a>
                <a target="_blank" href="https://www.youtube.com/@ThoufiqM_">
                <img loading="lazy" width="25" height="20" decoding="async" data-nimg="1" src={instagram} />
                </a>
                </div>
            </div>
        </div>
        <div className="copyright pt-5 pb-3">
            <div className="container">
              <div className="col-12 text-center">
              ©Designed By Poovarasan p
              </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
