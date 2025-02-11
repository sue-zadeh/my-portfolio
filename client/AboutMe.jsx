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
          I am a full stack Software Developer (Microsoft Azure & Azure AI
          certified) with 5+ years of frontend and 4+ years of backend
          experience. I recently earned my Master’s in Applied Computing from
          Lincoln University. My latest solo project, FieldSafe, hosted on AWS, was built for
          CVNZ to help conservation groups manage staff, oversee activities, log
          risks, and ensure compliance—all in a user-friendly platform. This
          project was developed using React Vite, TypeScript, REST API, Node.js,
          Express.js, and MySQL. I also led the development of FieldBase, an
          admin dashboard for CVNZ, designed to organize activities, send
          notifications, and archive projects, improving operational efficiency
          by more than 80%. With a strong foundation in full-stack development, hands-on
          experience from Dev Academy, AWS certifications, and real-world
          projects, I excel at solving technical challenges, optimizing
          workflows, and building impactful software. I thrive in Agile,
          collaborative environments and am passionate about creating scalable,
          user-focused solutions that drive efficiency and innovation.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
