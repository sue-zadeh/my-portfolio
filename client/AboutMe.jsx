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
          I was a teacher in my home country when I discovered my passion for
          technology. This led me to learn computer skills, and I quickly became
          fascinated. I built 2 websites for real estate and agricultural
          companies and sat up 2 computer workshops in a high school, where I
          served as a teacher and supervisor for 6 years. After relocating to
          New Zealand, I joined Dev Academy to expand my knowledge further. I
          thrived in the intensive course, constantly learning new technologies
          through various projects. Besides technical skills, I also developed
          valuable interpersonal skills such as teamwork, active listening,
          conflict resolution, feedback, collaboration, and problem-solving.
          What I love most is discovering my ability to learn quickly, work
          hard, and stay dedicated to my beliefs. I've also realized my
          proficiency in structural thinking and design, allowing me to approach
          problems creatively and strategically. I'm an energetic learner,
          always eager to improve. With my technical and interpersonal skills
          and a strong passion for continuous growth, I'm seeking opportunities
          in technology to further enhance my abilities and pursue my passion.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
