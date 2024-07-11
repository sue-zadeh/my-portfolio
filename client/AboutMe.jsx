import React, { useEffect } from 'react'
import { MdDeveloperBoard } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="fade-up" className="AboutMe">
      <div className="content-about">
        <h1 className="h-me2">
          <MdDeveloperBoard
            size={45}
            color="white"
            style={{ paddingRight: '10px', paddingLeft: '10px' }}
          />
          About Me
        </h1>
        <p className="p-me2">
          I am a motivated Software Engineer with Azure certification and more
          than a year of development experience, supported by six years managing
          computer workshops. My skills are continuously sharpened through
          rigorous training at Dev Academy, including courses in Azure AI
          Fundamentals, AWS, and ongoing studies in Salesforce, C# and .NET. I
          am known for my ability to quickly master new technologies and excel
          in dynamic, fast-paced settings. I am deeply committed to personal and
          professional growth, consistently seeking opportunities to enhance my
          programming and problem-solving abilities. My keen attention to detail
          and strong time management skills enable me to excel in software
          engineering, where I thrive under pressure and am always ready to
          tackle new challenges. I aim to leverage my comprehensive technical
          skills to drive innovation and efficiency in the tech industry. ive
          spirit to make a meaningful impact in the tech industry.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
