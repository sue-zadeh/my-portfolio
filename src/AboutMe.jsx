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
          <MdDeveloperBoard />
          About Me
        </h1>
        <p className="p-me2">
          I was a teacher in my country when I discovered my passion for
          technology. I needed to learn computer skills to become a registrar at
          my school, and I found it fascinating. I learned MCSE and MCSA
          certifications and even built a website for a real estate and
          agricultural company. In addition, I pursued short online courses on
          Azure, cloud computing, and AWS, earning certificates in these areas.
          When I moved to New Zealand, I decided to enroll in Dev Academy to
          further expand my knowledge. It was an intensive course, but I loved
          every moment of it. At Dev Academy, I've learned different programming
          languages like HTML5, CSS3, JavaScript, and Typescript. I also have
          experience working with databases like SQLite3 and MySQL, and I
          enjoyed working with ReactJS, P5, and Phaser3 during my time at Dev
          Academy. In addition to technical skills, I have gained valuable human
          skills, including teamwork, collaboration, and problem-solving through
          debugging. I am driven by a passion for technology, and I hold
          certificates in Azure, cloud computing, and AWS, along with my ISTQB
          certification.
          <br />
          I believe that my technical and human skills, coupled with my desire
          to continuously improve, will enable me to succeed and make a positive
          impact in the industry, and I hope to find a job in tech to continue
          improving my skills and pursue my passion.
          <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
