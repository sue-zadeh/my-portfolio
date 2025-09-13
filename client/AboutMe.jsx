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
          I am a Full-Stack Software Developer [Microsoft Azure & Azure AI
          certified, and ISTQB® Certified Tester(iSQI, Aug 2025)] with a
          Master’s in Applied Computing from Lincoln University. Specializing in
          React, Node.js, Python, AWS, and MySQL, I build scalable, user-focused
          applications that solve real-world problems efficiently. I developed
          FieldSafe, a SaaS admin dashboard for CVNZ, replacing paper-based
          workflows with a cloud-based system hosted on AWS, improving
          efficiency by 90%. Additionally, I built the Smart Panel Homes
          platform, a React-based interactive website that enhanced customer
          engagement by 80%. With hands-on experience from Dev Academy, AWS
          certifications, and a track record of delivering high-impact
          solutions, I thrive in Agile environments, optimizing workflows, and
          tackling complex technical challenges. Passionate about building
          scalable applications that drive innovation, I continuously seek ways
          to enhance performance, security, and automation.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
