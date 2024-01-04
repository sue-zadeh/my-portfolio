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
          I started as a teacher back in my home country, where I found my love
          for technology. This new interest led me to learn computer skills, and
          soon, I was totally into it. I even created websites for two
          companies, one in real estate and the other in agriculture, and helped
          set up computer classes at a high school where I taught and supervised
          for six years. When I moved to New Zealand, I joined the Dev Academy
          to learn even more. It was a tough course, but I loved every bit of
          it, picking up new tech skills on the way. I didn't just learn about
          technology; I also got better at working with people, listening,
          solving problems, and working as a team. I'm really good at learning
          things quickly, working hard, and sticking to what I believe in. I'm
          also pretty good at thinking logically and creatively, which helps me
          solve problems in smart ways. Right now, I'm volunteering at Smart
          Panel Homes Ltd, working on their website using tools like ReactJS,
          CSS, and Bootstrap. At the same time, I'm studying online for a
          Salesforce certification. I'm really focused on this because I love to
          learn and grow. In 2024, I plan to start an online Master's degree in
          Applied Computing at Lincoln University. I'm always looking for ways
          to get better at what I do. I'm a quick learner and always ready to
          take on new challenges. I'm looking for opportunities in the tech
          field where I can use my technical and people skills, and keep growing
          in my career.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
