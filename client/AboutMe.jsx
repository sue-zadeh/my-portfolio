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
          I am a Full-Stack Software Developer (Microsoft Azure & Azure AI
          certified) with 5+ years of frontend and 4+ years of backend
          experience. I recently earned my Master’s in Applied Computing from
          Lincoln University and have worked on real-world projects that solve
          complex problems efficiently. My latest solo project, FieldSafe, was
          built for CVNZ and hosted on AWS to help conservation groups manage
          staff, track activities, log risks, and ensure compliance—all in a
          user-friendly platform. I developed it using React Vite, TypeScript,
          REST API, Node.js, Express.js, and MySQL. I also led the development
          of FieldBase, an admin dashboard that streamlines project
          organization, sends automated notifications, and archives
          activities—boosting operational efficiency by over 80%. With a strong
          foundation in full-stack development, hands-on experience from Dev
          Academy, AWS certifications, and a track record of delivering
          high-impact solutions, I thrive in Agile, fast-paced teams. I’m
          passionate about solving technical challenges, optimizing workflows,
          and building scalable, user-focused applications that drive
          innovation.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
