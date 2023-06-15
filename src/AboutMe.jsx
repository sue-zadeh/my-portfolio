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
      <div className="div-me2">
        <h1 className="h-me2">
          <MdDeveloperBoard
            size={45}
            color="white"
            style={{ paddingRight: '10px', paddingLeft: '10px' }}
          />
          About Me
        </h1>
        <p className="p-me2">
          I was a teacher in my country when I discovered my passion for
          technology. I needed to learn computer skills to become a registrar at
          my school, and I found it fascinating. I learned MCSE and MCSA and
          even built a website for a real estate and agricultural company and
          sat up two Computer workshops in a high school.
          <br />
          After moving to New Zealand, I decided to enroll in Dev Academy to
          expand my knowledge further. It was an intensive course, but I loved
          every moment of it. I constantly learned new technologies through
          individual, pair and group projects. In addition to technical skills,
          I also gained valuable human skills, including teamwork, active
          listening, conflict resolution, giving and receiving feedback,
          collaborative and problem-solving.
          <br />
          what I loved most was discovering myself more and finding out how fast
          I can learn, how hard I work, and how dedicated I am to what I believe
          in. I also realized that I am good at structural thinking and design ,
          which helps me approach problems with creativity and strategic
          planning.
          <br />
          I am an energetic person and always eager to learn and improve my
          skills. And I believe that my tech and human skills, along with my
          passion for continuous improvement, will enable me to succeed, and I
          hope to find a career in technology to continue to improve my skills
          and pursue my passion.
          <br /> <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
