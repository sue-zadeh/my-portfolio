import React, { useState, useEffect } from 'react'
import { FaLaptopCode, FaGraduationCap, FaLightbulb } from 'react-icons/fa'
// import { HiOutlineHandWave } from 'react-icons/hi'
// import { AiFillInfoCircle } from 'react-icons/ai'
import { HiOutlineHand } from 'react-icons/hi'
// import { RiUserFill } from 'react-icons/ri'
// import { AiOutlineCode } from 'react-icons/ai'
// import Sue4 from './Assets/Sue4.jpg'

function Banner() {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const sentences = [
    {
      text: 'Hi, I am Sue Raisianz',
      icon: (
        <HiOutlineHand
          size={55}
          color="#cd7700"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Full Stack Web Developer',
      icon: (
        <FaLaptopCode
          size={55}
          color="#68c48b"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Dev Academy Graduate',
      icon: (
        <FaGraduationCap
          size={57}
          color="#4caf50"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Tech enthusiast',
      icon: (
        <FaLightbulb
          size={55}
          color="#2196f3"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [sentences.length])

  return (
    <div className="Banner">
      {/* <img className="pic" src={Sue4} alt="Sue4" /> */}
      <div className="sentence">
        <p className="web">
          {sentences[sentenceIndex].text}
          {sentences[sentenceIndex].icon}
        </p>
      </div>
    </div>
  )
}

export default Banner
