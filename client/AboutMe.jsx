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
          I am a motivated Software Development Graduate [Microsoft Azure &
          Azure AI certified] with over 5 years of frontend and 4 years of
          backend experience. Currently, I am in the final semester of a
          Master’s in Applied Computing, focusing on React, TypeScript, Node.js,
          Express.js, and MySQL. I lead the development of an admin dashboard
          (FieldBase) for CVNZ, designed to organize activities, send
          notifications, and archive projects, which has improved operational
          efficiency by 70%. My technical expertise has been sharpened through
          rigorous training at the Dev Academy coding boot camp, AWS
          certifications, and hands-on industry projects. Known for my ability
          to troubleshoot technical challenges, optimize workflows, and deliver
          impactful, client-focused software solutions, I thrive in Agile,
          collaborative teams. With a proven track record of building scalable
          solutions and enhancing user engagement, I am committed to leveraging
          my skills to create innovative software that drives efficiency and
          growth. My attention to detail, problem-solving ability, and eagerness
          to embrace challenges allow me to excel in dynamic, fast-paced
          environments.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
