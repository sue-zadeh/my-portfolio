import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import {
  MdDeveloperBoard,
  MdWork,
  MdOutlineStorage,
  MdVerified,
  MdLocationOn,
  MdOpenInNew,
} from "react-icons/md";
import { FaReact, FaPython, FaServer, FaCloud, FaGithub, FaLink } from "react-icons/fa";
import { TbChecklist, TbBolt, TbTargetArrow } from "react-icons/tb";
import { IoRibbonOutline } from "react-icons/io5";

const S = {
  pageWrap: {
    padding: "32px 16px 52px",
    color: "#fff",
    position: "relative",
  },
  container: {
    maxWidth: 1020,
    margin: "0 auto",
  },

  // ===== Hero =====
  hero: {
    background: "rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 18,
    padding: "22px 18px",
    backdropFilter: "blur(2px)",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    justifyContent: "center",
    fontWeight: 850,
    letterSpacing: "0.06em",
    margin: "4px 0 10px",
  },
  subTitle: {
    textAlign: "center",
    opacity: 0.92,
    margin: "0 auto 12px",
    maxWidth: 900,
    lineHeight: 1.7,
    fontSize: 15,
  },
  badgesRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "8px 12px",
    background: "rgba(255,255,255,0.06)",
    fontSize: 13,
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 14,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    padding: "10px 12px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },
  ctaBtnSoft: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    padding: "10px 12px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },

  // ===== Sections =====
  card: {
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(2px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: "22px 18px",
    marginTop: 14,
  },
  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "14px 0 10px",
    fontWeight: 800,
    textAlign: "left",
    letterSpacing: "0.02em",
  },

  // Lists
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 12,
    alignItems: "start",
    margin: "10px 0",
    textAlign: "left",
  },
  iconCell: {
    display: "inline-flex",
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.95,
    marginTop: 1,
  },
  text: { lineHeight: 1.75, fontSize: 14.5 },

  // Project blocks
  projectWrap: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "14px 14px",
    background: "rgba(255,255,255,0.05)",
    margin: "10px 0",
  },
  projectTitleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  projectTitle: {
    fontWeight: 850,
    fontSize: 15.5,
    margin: 0,
    lineHeight: 1.3,
  },
  projectMeta: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    opacity: 0.9,
    fontSize: 13,
  },
  miniChip: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "6px 10px",
    background: "rgba(0,0,0,0.18)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  },
  projectBody: { marginTop: 10, lineHeight: 1.75, fontSize: 14.5 },
  projectLinks: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 10,
  },
  linkBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    padding: "9px 12px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 750,
    fontSize: 14,
  },

  // Metrics chips (auto-wrap)
  chipsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
    margin: "8px 0 2px",
  },
  chip: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.06)",
    fontSize: 13.5,
    lineHeight: 1.4,
  },

  footerPara: {
    marginTop: 14,
    lineHeight: 1.85,
    textAlign: "left",
    fontSize: 14.5,
    opacity: 0.95,
  },
};

const Badge = ({ icon: Icon, children }) => (
  <span style={S.badge}>
    <Icon size={16} />
    <span>{children}</span>
  </span>
);

const IconItem = ({ icon: Icon, children }) => (
  <li style={S.item}>
    <span style={S.iconCell}>
      <Icon size={18} />
    </span>
    <span style={S.text}>{children}</span>
  </li>
);

const Project = ({
  title,
  chips = [],
  description,
  highlights = [],
  liveUrl,
  extraLink,
  icon: Icon = MdWork,
}) => (
  <div style={S.projectWrap}>
    <div style={S.projectTitleRow}>
      <h4 style={S.projectTitle}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Icon size={18} /> {title}
        </span>
      </h4>

      <div style={S.projectMeta}>
        {chips.map((c, idx) => (
          <span key={idx} style={S.miniChip}>
            <MdVerified size={16} /> {c}
          </span>
        ))}
      </div>
    </div>

    <div style={S.projectBody}>
      <div style={{ marginBottom: 8 }}>{description}</div>

      {highlights?.length > 0 && (
        <ul style={{ margin: "0 0 0 18px", padding: 0 }}>
          {highlights.map((h, idx) => (
            <li key={idx} style={{ margin: "6px 0" }}>
              {h}
            </li>
          ))}
        </ul>
      )}

      {(liveUrl || extraLink) && (
        <div style={S.projectLinks}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" style={S.linkBtn}>
              <MdOpenInNew /> Live site
            </a>
          )}
          {extraLink && (
            <a href={extraLink.href} target="_blank" rel="noreferrer" style={S.linkBtn}>
              {extraLink.icon || <FaLink />} {extraLink.label}
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <div data-aos="fade-up" style={S.pageWrap} className="AboutMe">
      <div style={S.container} className="content-about">
        {/* ===== HERO ===== */}
        <div style={S.hero} data-aos="fade-up">
          <h1 style={S.title} className="h-me2">
            <MdDeveloperBoard size={42} color="#fff" /> About Me
          </h1>

          <p style={S.subTitle}>
            I’m Sue — a full-stack developer based in Auckland. I build modern web apps end-to-end (UI + APIs + databases + deployments),
            with a strong focus on reliability, clean UX, and production-ready delivery.
          </p>

          <div style={S.badgesRow}>
            <Badge icon={MdLocationOn}>Auckland, New Zealand</Badge>
            <Badge icon={TbBolt}>Full-stack delivery</Badge>
            <Badge icon={TbChecklist}>Testing + CI/CD mindset</Badge>
            <Badge icon={FaCloud}>AWS & Azure</Badge>
          </div>

          <div style={S.badgesRow}>
            <Badge icon={IoRibbonOutline}>Master’s in Applied Computing (2025)</Badge>
            <Badge icon={MdVerified}>ISTQB® CTFL 4.0</Badge>
            <Badge icon={MdVerified}>Microsoft Azure Fundamentals + Azure AI</Badge>
            <Badge icon={MdVerified}>ICAgile (ICP)</Badge>
          </div>

          <div style={S.ctaRow}>
            <a
              href="https://www.showerpower.co.nz/"
              target="_blank"
              rel="noreferrer"
              style={S.ctaBtn}
            >
              <MdOpenInNew /> View Shower Power (Live)
            </a>

            {/* Optional: replace this link with your portfolio repo/site if you want */}
            <a
              href="https://www.linkedin.com/in/sue-zadeh/"
              target="_blank"
              rel="noreferrer"
              style={S.ctaBtnSoft}
            >
              <FaLink /> LinkedIn
            </a>
          </div>
        </div>

        {/* ===== QUICK SNAPSHOT ===== */}
        <div style={S.card} data-aos="fade-up">
          <h3 style={S.sectionHead}>
            <TbTargetArrow /> What recruiters usually care about (quick snapshot)
          </h3>

          <div style={S.chipsRow}>
            <div style={S.chip}>
              <FaReact size={16} /> <b>Frontend:</b> React / Vite, JS/TS, responsive UI, GSAP / AOS
            </div>
            <div style={S.chip}>
              <FaServer size={16} /> <b>Backend:</b> Node.js / Express, REST APIs, auth, email workflows (NodeMailer)
            </div>
            <div style={S.chip}>
              <MdOutlineStorage size={16} /> <b>Data:</b> PostgreSQL / MySQL, schema design, admin dashboards, reporting
            </div>
            <div style={S.chip}>
              <FaCloud size={16} /> <b>Deploy:</b> Docker, GitHub Actions (CI/CD), Azure App Service, AWS (EB/RDS/Route53/HTTPS)
            </div>
          </div>

          <p style={S.footerPara}>
            Background: I started in education (teacher + supervisor of a computer workshop), then moved fully into software.
            I completed Dev Academy (~800 hours) and later graduated with a Master’s in Applied Computing (2025).
            Today I focus on shipping real products — clean UI, strong APIs, solid database design, and reliable deployment.
          </p>
        </div>

        {/* ===== PROJECTS ===== */}
        <div style={S.card} data-aos="fade-up">
          <h3 style={S.sectionHead}>
            <MdWork /> Selected projects (real company work)
          </h3>

          <Project
            title="Shower Power — Commercial website for an NZ trade business"
            icon={FaReact}
            chips={[
              "React + Node/Express",
              "PostgreSQL",
              "Azure App Service",
              "Docker + CI/CD",
              "GSAP/AOS",
            ]}
            liveUrl="https://www.showerpower.co.nz/"
            description={
              <>
                Designed and built a full-stack production site with a performance-focused layout and modern animations.
              </>
            }
            highlights={[
              "Implemented lead capture (contact + quote forms) with email notifications (NodeMailer).",
              "Integrated PostgreSQL for FAQs and enquiry data management.",
              "Deployed to Azure App Service with GitHub Actions CI/CD for automated updates.",
              "Built a fully responsive UI with UX-first structure and smooth animations.",
            ]}
          />

          <Project
            title="Lodge-Matariki476 — Full-stack web app (stakeholder review)"
            icon={FaPython}
            chips={[
              "Flask",
              "PostgreSQL",
              "Docker",
              "CI/CD",
              "Azure planned",
            ]}
            description={
              <>
                Live on Railway for stakeholder feedback, then moving to Azure. Built to support admin + member flows with clean UX and production-ready structure.
              </>
            }
            highlights={[
              "Designed database schema + admin workflows (management, roles, access control).",
              "Implemented responsive UI and production-ready handling.",
              "Deployment pipeline and cloud migration plan prepared for Azure.",
            ]}
          />

          <Project
            title="FieldSafe (CVNZ) — Admin dashboard (AWS)"
            icon={FaCloud}
            chips={["React/Vite + TS", "Node.js", "MySQL", "AWS EB/RDS/Route53"]}
            description={
              <>
                Built an admin dashboard to streamline operations and reduce manual handling through role-based access, reporting, and automated workflows.
              </>
            }
            highlights={[
              "Implemented role-based access and workflow automation.",
              "Improved day-to-day handling through clear UI, reporting, and traceability.",
              "Deployed with HTTPS and production-ready cloud setup.",
            ]}
          />

          <Project
            title="Smart Panel Homes — Company website + lead capture"
            icon={FaServer}
            chips={["React", "PHP", "MySQL", "SEO + UX"]}
            description={
              <>
                Delivered a responsive website focused on engagement and lead generation.
              </>
            }
            highlights={[
              "Built a clean, responsive UI and optimized layout for usability.",
              "Switched backend to PHP to support forms + email on the hosting plan (no extra cost).",
              "Focused on performance, SEO basics, and conversion-friendly structure.",
            ]}
          />
        </div>

        {/* ===== REMOTE AI WORK ===== */}
        <div style={S.card} data-aos="fade-up">
          <h3 style={S.sectionHead}>
            <TbChecklist /> Remote AI evaluation work (current)
          </h3>

          <ul style={S.list}>
            <IconItem icon={TbChecklist}>
              <b>Alignerr</b> — working on AI evaluation and quality review tasks (instruction following, correctness checks, and structured feedback).
            </IconItem>
            <IconItem icon={TbChecklist}>
              <b>Labelbox</b> — contributing to labeling / human preference tasks for production projects, following strict guidelines and review loops.
            </IconItem>
            <IconItem icon={TbChecklist}>
              <b>CrowdGen</b> — participating in remote AI training/evaluation workflows, delivering consistent quality under acceptance-based criteria.
            </IconItem>
          </ul>

          <p style={S.footerPara}>
            This work sharpened how I write clear feedback, spot edge cases, and think like a QA reviewer — skills I bring directly into building software that’s easy to use, test, and maintain.
          </p>
        </div>

        {/* ===== WHAT I DO DAY TO DAY ===== */}
        <div style={S.card} data-aos="fade-up">
          <h3 style={S.sectionHead}>
            <TbBolt /> How I work (day-to-day)
          </h3>

          <ul style={S.list}>
            <IconItem icon={MdOutlineStorage}>
              <b>Data-first thinking:</b> I design clean schemas, write reliable APIs, and keep the UI aligned with real workflows.
            </IconItem>
            <IconItem icon={TbChecklist}>
              <b>Quality mindset:</b> I build with testing in mind, validate inputs, handle edge cases, and aim for safe releases.
            </IconItem>
            <IconItem icon={FaCloud}>
              <b>Delivery:</b> Docker + CI/CD, Azure & AWS deployments, and practical monitoring/debugging habits.
            </IconItem>
            <IconItem icon={FaGithub}>
              <b>Collaboration:</b> GitHub flow, clear commits/PRs, and communication that keeps stakeholders confident.
            </IconItem>
          </ul>

          <p style={S.footerPara}>
            I’m looking for a full-time role where I can ship real features, improve reliability, and contribute as a full-stack developer who cares about user experience and production quality.
          </p>
        </div>
      </div>
    </div>
  );
}
