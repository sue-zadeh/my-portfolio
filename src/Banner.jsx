import React, { useState, useEffect } from 'react'
import { FaLaptopCode, FaGraduationCap, FaLightbulb } from 'react-icons/fa'
// import { AiOutlineCode } from 'react-icons/ai'

function Banner() {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const sentences = [
    {
      text: 'Full Stack Web Developer',
      icon: (
        <FaLaptopCode
          size={51}
          color="#3cacbb"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Dev Academy Graduate',
      icon: (
        <FaGraduationCap
          size={51}
          color="#4caf50"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Tech enthusiast',
      icon: (
        <FaLightbulb
          size={51}
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
