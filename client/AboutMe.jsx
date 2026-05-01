import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Icons
import { MdDeveloperBoard, MdWork, MdOutlineStorage } from 'react-icons/md'
import { FaReact, FaPython, FaServer, FaCloud } from 'react-icons/fa'
import { TbChecklist, TbBolt } from 'react-icons/tb'

const S = {
  pageWrap: {
    paddingTop: '12rem', // ✅ match your navbar height (adjust if needed)
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '48px',
    color: '#fff',
    position: 'relative',
  },
  container: {
    maxWidth: 980,
    margin: '0 auto',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
    fontWeight: 800,
    letterSpacing: '0.06em',
    margin: '8px 0 18px',
  },

  // ✅ Intro wrapper + paragraphs (controls spacing cleanly)
  introWrap: {
    maxWidth: 880,
    margin: '0 auto 18px',
    textAlign: 'left',
  },
  introP1: {
    margin: '0 0 10px 0', // ✅ small gap
    lineHeight: 1.9,
    fontSize: 18,
  },
  introP2: {
    margin: '0 0 6px 0',
    lineHeight: 1.9,
    fontSize: 18,
    opacity: 0.98,
  },

  card: {
    background: 'rgba(0,0,0,0.45)',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: '22px 18px',
    marginTop: 8,
  },
  sectionHead: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    margin: '18px 0 10px',
    fontWeight: 800,
    textAlign: 'left',
  },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  item: {
    display: 'grid',
    gridTemplateColumns: '28px 1fr',
    gap: 12,
    alignItems: 'start',
    margin: '12px 0',
    textAlign: 'left',
  },
  iconCell: {
    display: 'inline-flex',
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.95,
  },
  text: { lineHeight: 1.75, fontSize: 16.5 },
  link: {
    color: 'rgb(246, 7, 7)',
    fontWeight: 800,
    textDecoration: 'none',
  },
  chipsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 10,
    margin: '6px 0 10px',
  },
  chip: {
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 999,
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,0.06)',
    fontSize: 14.5,
  },
  footerPara: {
    marginTop: 14,
    lineHeight: 1.85,
    textAlign: 'left',
    fontSize: 16.5,
    opacity: 0.95,
  },
}

const IconItem = ({ icon: Icon, children, aos = 'fade-up' }) => (
  <li style={S.item} data-aos={aos}>
    <span style={S.iconCell}>
      <Icon size={18} />
    </span>
    <span style={S.text}>{children}</span>
  </li>
)

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    })
  }, [])
  return (
    <div style={S.pageWrap} className="AboutMe" data-aos="fade-up">
      <div style={S.container} className="content-about">
        <h1 style={S.title} className="h-me2" data-aos="fade-down-right">
          {/* <MdDeveloperBoard size={42} color="#fff" />  */}
          About Me
        </h1>

        {/* ✅ Intro with smaller spacing */}
        <div style={S.introWrap}>
          <p style={S.introP1} data-aos="fade-up">
            I’m Sue, a full-stack developer based in Auckland. I build modern
            web apps end-to-end: clean UI, strong APIs, solid database design,
            and reliable deployments.
          </p>

          <p style={S.introP2} data-aos="fade-up">
            I started my career in education (teacher + computer workshop
            supervisor), then moved into software. Since then, I’ve focused on
            building real products for real businesses - not just demos.
          </p>
        </div>

        <div style={S.card} data-aos="fade-up">
          {/* Projects */}
          <h3 style={S.sectionHead} data-aos="fade-right">
            <MdWork /> Client websites & production projects (selected)
          </h3>

          <ul style={S.list} data-aos="fade-up">
            <IconItem icon={FaServer} aos="fade-down-right">
              <b>Shower Power</b> — full-stack production website (React,
              Node/Express, PostgreSQL, Docker, Azure App Service, CI/CD).
              <br />
              <a
                style={S.link}
                href="https://www.showerpower.co.nz/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.showerpower.co.nz/
              </a>
              <br />
              Lead capture (contact + quote forms) with email notifications,
              responsive UI, and performance-focused layout.
            </IconItem>

            <IconItem icon={FaPython} aos="fade-down-left">
              <b>Lodge-Matariki476</b> — live on Railway for stakeholder review
              (Azure deployment next).
              <br />
              <a
                style={S.link}
                href="https://lodgematariki476.co.nz/"
                target="_blank"
                rel="noreferrer"
              >
                https://lodgematariki476.co.nz/
              </a>
              <br />
              Full-stack build with clean admin/member flows and
              production-ready structure.
            </IconItem>

            <IconItem icon={FaCloud} aos="fade-down-right">
              <b>FieldSafe (CVNZ)</b> — admin dashboard on AWS (React/TS, Node,
              MySQL; EB/RDS/Route53/HTTPS).
              <br />
              <a
                style={S.link}
                href="http://fieldsafe.org.nz/"
                target="_blank"
                rel="noreferrer"
              >
                http://fieldsafe.org.nz/
              </a>
              <br />
              Built to streamline operations with role-based access and
              reporting workflows.
            </IconItem>

            <IconItem icon={FaReact} aos="fade-down-left">
              <b>Smart Panel Homes</b> - business website focused on engagement
              + lead capture.
              <br />
              <a
                style={S.link}
                href="https://smartpanelhomes.co.nz/"
                target="_blank"
                rel="noreferrer"
              >
                https://smartpanelhomes.co.nz/
              </a>
              <br />
              Delivered a modern UI and adjusted backend to fit hosting
              constraints while keeping costs low.
            </IconItem>
            <IconItem icon={FaServer} aos="fade-down-right">
              <b>SAMCT</b> — in-progress client website and portal.
              <br />
              Building a multi-role website with public pages, resident
              maintenance access, and admin dashboard flows using React, C#,
              .NET, PostgreSQL, and Docker.
            </IconItem>

            <IconItem icon={FaReact} aos="fade-down-left">
              <b>Senior Healthcare Auckland Ltd</b> — in-progress client
              business website.
              <br />
              Building responsive animated pages, staff recruitment form, and
              client needs enquiry form from wireframe to production.
            </IconItem>
          </ul>

          {/* Strengths */}
          <h3 style={S.sectionHead} data-aos="fade-right">
            <TbBolt /> What I’m strong at
          </h3>

          <div style={S.chipsRow}>
            <div style={S.chip} data-aos="fade-up">
              <FaReact size={16} /> <b>Frontend:</b> UX-first React UI,
              responsive design, animation when useful
            </div>
            <div style={S.chip} data-aos="fade-up">
              <FaServer size={16} /> <b>Backend:</b> clean REST APIs, auth
              patterns, email workflows
            </div>
            <div style={S.chip} data-aos="fade-up">
              <MdOutlineStorage size={16} /> <b>Data:</b> schema design,
              queries, admin dashboards
            </div>
            <div style={S.chip} data-aos="fade-up">
              <TbChecklist size={16} /> <b>Quality:</b> testing mindset, edge
              cases, maintainable code
            </div>
          </div>

          {/* Freelance work */}
          <IconItem icon={FaReact} aos="fade-down-right">
            <b>Freelance Web Developer</b> - personal freelance service website.
            <br />
            <a
              style={S.link}
              href="https://freelance-web-developer-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://freelance-web-developer-production.up.railway.app/
            </a>
            <br />
            Built to present my freelance web development services, selected
            work, and client-focused website solutions.
          </IconItem>

          <ul style={S.list}>
            <IconItem icon={MdDeveloperBoard} aos="fade-up">
              <b>Freelance Full Stack Developer</b>
              <br />I build client websites and web applications from planning
              to deployment, including responsive pages, admin dashboards,
              secure forms, database design, API integration, email workflows,
              hosting, SSL, and production fixes.
            </IconItem>

            <IconItem icon={FaReact} aos="fade-up">
              <b>Current client projects</b>
              <br />
              I’m currently working on websites and portals such as <b>
                SAMCT
              </b>{' '}
              and <b>Senior Healthcare Auckland Ltd</b>, focusing on multi-role
              access, enquiry forms, responsive animated pages, and clean user
              experience.
            </IconItem>

            <IconItem icon={FaCloud} aos="fade-up">
              <b>Production delivery</b>
              <br />I have deployed real business websites using AWS, Azure,
              Railway, Docker, GitHub Actions, SSL/HTTPS, custom domains, and
              database-backed backend services.
            </IconItem>
          </ul>

          <p style={S.footerPara} data-aos="fade-up">
            I’m looking for a full-time role where I can contribute as a
            full-stack developer - building real features, improving
            reliability, and shipping clean, user-friendly products.
          </p>
        </div>
      </div>
    </div>
  )
}
