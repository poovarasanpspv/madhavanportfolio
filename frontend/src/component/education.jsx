import React from 'react'
import pgp from '../component/images/pgp.svg'
import college from '../component/images/college.svg'
function Education() {
   const educationimg = [pgp, college];
const Experience = [
    {
        "img":"./sdd.png",
        "title":"Master of Business Administration - International Business",
        "grade":"Grade: 90%",
        "Date": " 2021 - 2023",
        "description":"PUDUCHERRY TECHNOLOGICAL UNIVERSITY"
    },
        {
        "img":"./sdd.png",
        "title":"Bachelor of Computer Application",
        "grade":"Grade: 90%",
        "Date": "2018 - 2021",
        "description":"RAAK ARTS & SCIENCE COLLEGE"
    }
      
     
];



  return (
    <div className='experience-section education-section scroll-by-section' id='educationid'>
      <h1 className='education-title'>Education</h1>

      <div className="container">
        <div className="experience-list">
            <ul className='list-exp'>

                {
                   Experience.map((item, i) => {
                    return <li key={i}>

                        <div className="exp-flex-box row justify-content-between align-items-center">
                        <div className="exp-flex-box1 col-md-8 col-sm-12"> <span className='img-pic-icon'><img src={educationimg[i]} alt="" /></span>  <span className='heading'>{item.title} </span> <span className='timeline'>{item.grade}</span> </div>
                        <div className="exp-flex-box2 col-md-4 col-sm-12"> <p>{item.Date}</p> </div>
                        </div>

                        <div className='description'>
                            <p>
                              {item.description}
                            </p>
                        </div>

                    </li>
                   }) 
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Education