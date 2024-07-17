import React from 'react'
import twitter from './images/twitter.svg'
function Experience() {

const Experience = [
    {
        "img":"./sdd.png",
        "title":"UIUX Designer at “PYRAMIDIONS SOLUTIONS”",
        "working-type":"Full time",
        "Date": "Jan 2024 - Present",
        "description":"As a UI/UX Designer at a leading software development company in Chennai, with satellite companies in the USA and Canada, I have designed over 10 projects across variousindustries. My role involved working closely with developers,business analysts, CTO, CEO, COO, managers, and investors to"
    },
        {
        "img":"./sdd.png",
        "title":"UIUX / Graphic/3D  Designer at  “METAPYRA”",
        "working-type":"Fulltime",
        "Date": "Jan 2024 - Present",
        "description":"Metapyra, a subsidiary of Pyramidions, is a new startup providing virtual office spaces for collaboration. In this role, I created UI flows, designed posters, developed 3D office environments, and managed social media accounts, playing a major role in establishing the company's online presence"
    },
        {
        "img":"./sdd.png",
        "title":"Graphic designer in research at “GG DESIGN HUB”",
        "working-type":"Internship",
        "Date": "Sept 2023 - Jan 2024 ",
        "description":"I interned as a graphic designer, where my tasks included  researching and sketching robust brand foundations. I participated in daily meetings, consistently met deadlines  and focused on discussions about digitizing to enhance brand identity."
    },
        {
        "img":"./sdd.png",
        "title":"Freelancer / Content Creator ",
        "working-type":"Freelance",
        "Date": "Jun 2018 - Jan 2024",
        "description":"As a freelance designer, I have created over 3,000 designsand have been actively involved in content creation,focusing on the logo design process and storytelling. I am currently authoring a book on these topics. My social media presence boasts over 13,000 followers, highlighting my influence and engagement within the design community."
    }
];



  return (
    <div className='experience-section scroll-by-section' id='experienceid'>
      <h1 className='experince-title'>Experience</h1>

      <div className="container">
        <div className="experience-list">
            <ul className='list-exp'>

                {
                   Experience.map((item, i) => {
                    return <li key={i}>

                        <div className="exp-flex-box row justify-content-between align-items-center">
                        <div className="exp-flex-box1 col-md-8 col-sm-12"> <span className='img-pic-icon'><img src={twitter} alt="" /></span>  <span className='heading'>{item.title} </span> <span className='timeline'>{item['working-type']}</span> </div>
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

export default Experience
