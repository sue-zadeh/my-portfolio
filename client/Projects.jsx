import React, { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Squish from './Assets/squish.png'
import Devstagram from './Assets/Devstagram.png'
import Nodeal from './Assets/nodeal.png'
import Eat from './Assets/deveat.png'
import Chat from './Assets/Chat.png'
import Minesweeper from './Assets/minesweeper.png'
import Toe from './Assets/tic-tac-toe.png'
import Music from './Assets/music.png'
import Sportflix from './Assets/Sportflix.png'
import Smartpanel from './Assets/smartpanel.png'
import Scg from './Assets/selwyn.png'
import Treetalk from './Assets/TreeTalk.png'
import Votingcenter from './Assets/voting-center.png'
import Pokemon from './Assets/advancedsearch.png'
import Fieldsafe from './Assets/fieldsafe.png'
import Lodge from './Assets/lodge1.png'
import Showerpower from './Assets/showerpower.png'
import Healthcare from './Assets/healthcare.png'
import SAMCTpublic from './Assets/home-public-SAMCT.png'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    })
  }, [])

  const categories = [
    'All',
    'Real Company Projects',
    'Solo Projects',
    'Group Projects',
  ]

  const projects = [
    {
      title: 'SAMCT Villages',
      category: 'Real Company Projects',
      image: SAMCTpublic,
      status: 'In Progress',
      shortDescription:
        'A multi-role SaaS platform with public pages, resident access, village managers, and admin dashboards.',
      hoverDescription:
        'Built for real village operations with resident requests, admin control, role-based access, and responsive UI.',
      tags: ['React', 'C# .NET', 'PostgreSQL', 'Bootstrap', 'Playwright'],
      liveUrl: 'https://samct-production.up.railway.app/',
      githubUrl: 'https://github.com/sue-zadeh/SAMCT',
    },
    {
      title: 'Lodge-Matariki476',
      category: 'Real Company Projects',
      image: Lodge,
      status: 'Live',
      shortDescription:
        'A membership-focused web app with admin tools, secure access, events, files, and member features.',
      hoverDescription:
        'Designed for member management, internal use, and structured admin control.',
      tags: ['Python', 'Flask', 'PostgreSQL', 'Azure', 'Bootstrap'],
      liveUrl: 'https://lodgematariki476.co.nz/',
      githubUrl: 'https://github.com/sue-zadeh/lodge-matarik476-python',
    },
    {
      title: 'FieldSafe',
      category: 'Real Company Projects',
      image: Fieldsafe,
      status: 'Preview Only',
      shortDescription:
        'A full-stack operations dashboard for CVNZ, built for activity planning, staff tasks, and risk management.',
      hoverDescription:
        'A real client project focused on workflow control, safety compliance, offline access, and practical field operations.',
      tags: ['React Vite', 'TypeScript', 'MySQL', 'PWA', 'IndexedDB'],
      liveUrl: 'https://fieldsafe.org.nz/',
      githubUrl: 'https://github.com/sue-zadeh/offline-fieldsafe',
    },
    {
      title: 'Smart Panel Homes',
      category: 'Real Company Projects',
      image: Smartpanel,
      status: 'Live',
      shortDescription:
        'A professional company website built to showcase services, branding, and trust.',
      hoverDescription:
        'A business presentation website with clear structure, polished UI, and responsive design.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
      liveUrl: 'https://www.smartpanelhomes.co.nz/',
      githubUrl: 'https://github.com/sue-zadeh/smart-panel',
    },
    {
      title: 'ShowerPower',
      category: 'Real Company Projects',
      image: Showerpower,
      status: 'Live',
      shortDescription:
        'A modern business website designed to present services clearly and support customer inquiries.',
      hoverDescription:
        'A service-focused site with responsive design, lead-focused layout, and clean visual structure.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Azure'],
      liveUrl: 'https://www.showerpower.co.nz/',
      githubUrl: 'https://github.com/sue-zadeh/showerpower',
    },
    {
      title: 'Senior Healthcare Auckland Ltd',
      category: 'Real Company Projects',
      image: Healthcare,
      status: 'In Progress',
      shortDescription:
        'A healthcare website built from wireframe to production to support client and staffing enquiries.',
      hoverDescription:
        'An in-progress real business website focused on service clarity, trust, and responsive UI.',
      tags: ['Next.js', 'C# .NET', 'PostgreSQL', 'Azure', 'Bootstrap'],
      githubUrl: 'https://github.com/sue-zadeh/SeniorCareAucklandLtd',
    },
    {
      title: 'Pokedex',
      category: 'Solo Projects',
      image: Pokemon,
      status: 'GitHub',
      shortDescription:
        'An interactive Pokédex app with filtering, searching, sorting, and clean responsive UI.',
      hoverDescription:
        'Built to practise API use, TypeScript, filtering logic, and modern frontend structure.',
      tags: ['React Vite', 'TypeScript', 'Flask', 'REST API', 'Bootstrap'],
      githubUrl: 'https://github.com/sue-zadeh/pokedex',
    },
    {
      title: 'Selwyn Campground',
      category: 'Solo Projects',
      image: Scg,
      status: 'GitHub',
      shortDescription:
        'A campground management app for customer and booking records.',
      hoverDescription:
        'Built to support office staff with adding, editing, and managing booking information.',
      tags: ['Python', 'Flask', 'Jinja', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/sue-zadeh/scg',
    },
    {
      title: 'My Sportlist',
      category: 'Solo Projects',
      image: Sportflix,
      status: 'GitHub',
      shortDescription:
        'A sport discovery app with sidebar navigation and API-based content.',
      hoverDescription:
        'A Netflix-style sports browsing project built for frontend and API practice.',
      tags: ['React', 'CSS', 'APIs', 'Responsive UI'],
      githubUrl: 'https://github.com/sue-zadeh/my-sportlist',
    },
    {
      title: 'Chatroom',
      category: 'Solo Projects',
      image: Chat,
      status: 'GitHub',
      shortDescription:
        'A real-time chatroom app with media sharing features.',
      hoverDescription:
        'Built with Firebase and realtime database features for live user interaction.',
      tags: ['React', 'Firebase', 'Realtime DB', 'Media Sharing'],
      githubUrl: 'https://github.com/sue-zadeh/chatroom',
    },
    {
      title: 'TreeTalk',
      category: 'Solo Projects',
      image: Treetalk,
      status: 'GitHub',
      shortDescription:
        'A community platform for posting, replying, reacting, and sharing images.',
      hoverDescription:
        'A social-style app focused on user interaction, account features, and community discussion.',
      tags: ['Python', 'Flask', 'Jinja', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/sue-zadeh/tree-talk',
    },
    {
      title: 'Minesweeper',
      category: 'Solo Projects',
      image: Minesweeper,
      status: 'GitHub',
      shortDescription:
        'A JavaScript Minesweeper game built for logic and DOM practice.',
      hoverDescription:
        'A small but useful project for practising JavaScript game logic. Painful, but character-building.',
      tags: ['JavaScript', 'CSS', 'Game Logic'],
      githubUrl: 'https://github.com/sue-zadeh/minesweeper',
    },
    {
      title: 'Tic Tac Toe',
      category: 'Solo Projects',
      image: Toe,
      status: 'GitHub',
      shortDescription:
        'A simple Tic Tac Toe game built with JavaScript and CSS.',
      hoverDescription:
        'A classic practice project for frontend logic, user interaction, and basic game flow.',
      tags: ['JavaScript', 'CSS', 'Game'],
      githubUrl: 'https://github.com/sue-zadeh/tic-tac-toe',
    },
    {
      title: 'Music Band',
      category: 'Solo Projects',
      image: Music,
      status: 'Live',
      shortDescription:
        'A music band website created from self-study and early frontend practice.',
      hoverDescription:
        'One of the early projects showing HTML, CSS, and JavaScript foundations.',
      tags: ['HTML', 'CSS', 'JavaScript', '2021'],
      liveUrl: 'https://sue-zadeh.github.io/music-band/',
      githubUrl: 'https://github.com/sue-zadeh/music-band',
    },
    {
      title: 'DevStagram',
      category: 'Group Projects',
      image: Devstagram,
      status: 'GitHub',
      shortDescription:
        'A one-day group project where users could display and add JSON-based content.',
      hoverDescription:
        'I developed the sign-in page and helped manage Git. Humanity survived group Git somehow.',
      tags: ['React', 'Redux', 'TypeScript', 'CSS', 'Git'],
      githubUrl: 'https://github.com/sue-zadeh/DevStagram',
    },
    {
      title: 'Squishy-Squish',
      category: 'Group Projects',
      image: Squish,
      status: 'Live',
      shortDescription:
        'A one-week final group game project with frontend, backend, tests, and Git teamwork.',
      hoverDescription:
        'I contributed to frontend, backend, Git management, and testing for pages.',
      tags: ['p5.js', 'JavaScript', 'Redux', 'Jest', 'TypeScript'],
      liveUrl: 'https://helpfulself.xyz/',
      githubUrl: 'https://github.com/sue-zadeh/Squishy-Squish',
    },
    {
      title: 'No Deal or Deal',
      category: 'Group Projects',
      image: Nodeal,
      status: 'GitHub',
      shortDescription:
        'A one-day group game project where I worked as the frontend lead.',
      hoverDescription:
        'A fast team project focused on UI, game flow, and React state structure.',
      tags: ['React', 'Redux', 'TypeScript', 'CSS'],
      githubUrl: 'https://github.com/sue-zadeh/no-deal-or-deal',
    },
    {
      title: 'Dev Eats',
      category: 'Group Projects',
      image: Eat,
      status: 'GitHub',
      shortDescription:
        'A restaurant showcase website for Indian, Italian, Asian, and Vegan food options.',
      hoverDescription:
        'A one-day group project using JavaScript, server-side handling, and CSS.',
      tags: ['JavaScript', 'Server Side', 'CSS', 'Group Project'],
      githubUrl: 'https://github.com/sue-zadeh/dev-eats',
    },
    {
      title: 'Voting Center',
      category: 'Group Projects',
      image: Votingcenter,
      status: 'GitHub',
      shortDescription:
        'A voting platform for choosing the best walkway in New Zealand.',
      hoverDescription:
        'I built registration, login, voting, results pages, backend logic, and responsive styling.',
      tags: ['Python', 'Flask', 'Jinja', 'MySQL', 'Bootstrap'],
      githubUrl:
        'https://github.com/sue-zadeh/voting-best-track-NZ',
    },
  ]

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const openProject = (url) => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="portfolio-projects-page">
      <div className="portfolio-projects-overlay"></div>

      <div className="container position-relative portfolio-projects-content">
        <div className="text-center projects-hero" data-aos="fade-up">
          <span className="projects-badge">Selected Projects</span>

          <h3 className="projects-title fw-semibold mt-3">
            Projects built for real users, real problems, and real learning
          </h3>

          <p className="projects-intro">
            A collection of real company websites, solo projects, and group
            projects showing my full-stack development, testing, responsive UI,
            and problem-solving skills.
          </p>

          <div className="row g-3 justify-content-center mt-4 projects-stats">
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <strong>6+</strong>
                <span>Real company projects</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-box">
                <strong>Full-stack</strong>
                <span>Frontend + backend</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-box">
                <strong>Testing</strong>
                <span>Playwright + Postman</span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-box">
                <strong>Responsive</strong>
                <span>Mobile-friendly UI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-row" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-xl-4" key={project.title}>
              <article className="project-card h-100" data-aos="fade-up" tabIndex="0">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-hover-layer">
                    <span className="project-type">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.hoverDescription}</p>

                    <div className="project-hover-actions">
                      {project.liveUrl && (
                        <button
                          type="button"
                          className="btn btn-light btn-sm rounded-pill"
                          onClick={() => openProject(project.liveUrl)}
                        >
                          View Live
                        </button>
                      )}

                      {project.githubUrl && (
                        <button
                          type="button"
                          className="btn btn-outline-light btn-sm rounded-pill"
                          onClick={() => openProject(project.githubUrl)}
                        >
                          GitHub
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                    <h3 className="project-name">{project.title}</h3>
                    <span
                      className={`project-status ${
                        project.status === 'Live'
                          ? 'status-live'
                          : project.status === 'In Progress'
                          ? 'status-progress'
                          : ''
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">
                    {project.shortDescription}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {project.liveUrl && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-pill px-3"
                        onClick={() => openProject(project.liveUrl)}
                      >
                        View Live
                      </button>
                    )}

                    {project.githubUrl && (
                      <button
                        type="button"
                        className="btn btn-outline-light btn-sm rounded-pill px-3"
                        onClick={() => openProject(project.githubUrl)}
                      >
                        GitHub
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects