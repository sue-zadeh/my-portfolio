import NavBar from './NavBar'
import developer1 from './Assets/developer1.jpg'
import { MdDeveloperBoard } from 'react-icons/md'

function AboutMe() {
  return (
    <div className="AboutMe">
      <img className="img" src={developer1} alt="Computer" />
      <div className="navme-position">
        <NavBar />
      </div>
      <div>
        <h1 className="h-me2">
          <MdDeveloperBoard
            size={45}
            color="#1a032f"
            style={{ paddingRight: '10px', paddingLeft: '10px' }}
          />
          About Me
        </h1>
        <p className="p-me2">
          I was a teacher in my country when I discovered my passion for
          technology. I needed to learn computer skills to become a registrar at
          my school, and I found it fascinating. I learned MCSE and MCSA and
          even built a website for a real estate and agricultural company and
          sat up 2 Computer workshop in a high school.
          <br />
          After moving to New Zealand, I decided to enroll in Dev Academy to
          expand my knowledge further. It was an intensive course, but I loved
          every moment of it. During my time at Dev Academy, I constantly
          learned new technologies including HTML5, CSS3, Tailwind, SCSS,
          JavaScript, and TypeScript, and experienced working with databases.
          Data using SQL and Sqlite3, I worked with libraries like Reactjs, P5,
          Phaser3 and learned how to work with Heroku, Netlify. I also learned
          how to write tests, work with Jest, GitHub, API, Adobe Dream Weaver,
          Adobe Photoshop, Visual Studio, Postman and Insomnia through
          individual, pair and group projects. In addition to technical skills,
          I also gained valuable human skills, including teamwork,
          collaboration, and problem solving through debugging and the capacity
          for structural and design thinking.
          <br />
          I Learnt about Microsoft cloud, Azure Fundamentals and Aws through
          short online course after graduating from Dev Academy. Also I achieved
          2 certificates in ISTQB
          <br />
          I am energetic person and always eager to learn and improve my skills
          and I believe that my technical and human skills, coupled with my
          desire to continuously improve, will enable me to succeed and make a
          positive impact in the industry, and I hope to find a job in tech to
          continue improving my skills and pursue my passion.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
