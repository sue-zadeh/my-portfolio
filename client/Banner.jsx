import React, { useState, useEffect } from 'react'
import {
  FaLaptopCode,
  FaGraduationCap,
  FaLightbulb,
  FaBook,
  FaCertificate,
} from 'react-icons/fa' // Import FaBook for a study-related icon
import { HiOutlineHand, HiCloud } from 'react-icons/hi'

function Banner() {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const sentences = [
    {
      text: 'Hi, I am Sue Zadeh',
      icon: (
        <HiOutlineHand
          size={58}
          color="#cd7700"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Full Stack Web Developer',
      icon: (
        <FaLaptopCode
          size={63}
          color="beige"
          style={{ paddingRight: '14px', paddingLeft: '14px' }}
        />
      ),
    },
    {
      text: 'Master’s in Applied Computing',
      icon: (
        <FaGraduationCap
          size={60}
          color="#cd7700"
          style={{ paddingRight: '12px', paddingLeft: '12px' }}
        />
      ),
    },
    {
      text: 'ISTQB® Certified Tester (iSQI, Aug 2025)',
      icon: (
        <FaCertificate
          size={70}
          color="#cd7700"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'ICAgile Certified Professional (ICP, Nov 2025)',
      icon: (
        <FaCertificate
          size={70}
          color="#cd7700"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Microsoft Azure Certified',
      icon: (
        <HiCloud
          size={70}
          color="#cd7700"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}
        />
      ),
    },
    {
      text: 'Dev Academy Graduate',
      icon: (
        <FaGraduationCap
          size={63}
          color="beige"
          style={{ paddingRight: '14px', paddingLeft: '13px' }}
        />
      ),
    },

    {
      text: 'Tech enthusiast',
      icon: (
        <FaLightbulb
          size={55}
          color="#cd7700"
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
    <div
      className="Banner"
      style={{
        backgroundColor: 'black',
        paddingTop: '7rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '1.5rem',
        width: '100%',
      }}
    >
      <div data-aos="fade-down-right" className="sentence">
        <p className="web">
          {sentences[sentenceIndex].text}
          {sentences[sentenceIndex].icon}
        </p>
      </div>
    </div>
  )
}

export default Banner