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
          I was working as a teacher in my home country when I discovered my
          passion for technology. As I aspired to become a registrar at my
          school, I recognized the need to acquire computer skills, and I found
          the subject fascinating. I pursued MCSE and MCSA certifications and
          even developed a website for a real estate and agricultural company.
          <br />
          Upon moving to New Zealand, I made the decision to enroll in Dev
          Academy to further expand my knowledge. It was an intensive course,
          but I thoroughly enjoyed every moment of it. During my time at Dev
          Academy, I gained proficiency in various programming languages such as
          HTML5, CSS3, JavaScript, and Typescript. I also acquired experience
          working with databases like SQLite3 and MySQL, and I had the
          opportunity to work with ReactJS, P5, and Phaser3. Additionally, I
          developed valuable interpersonal skills such as teamwork,
          collaboration, and problem-solving through debugging.
          <br />
          Driven by my passion for technology, I pursued short online courses on
          Azure, cloud computing, and AWS, earning certifications in these
          areas, in addition to my ISTQB certification.
          <br />I firmly believe that my technical expertise, coupled with my
          interpersonal skills and desire for continuous improvement, will
          enable me to succeed and make a positive impact in the tech industry.
          I am eager to find a job in the field, where I can further enhance my
          skills and pursue my passion.
          <br /> <br />
        </p>
      </div>
    </div>
  )
}
export default AboutMe
