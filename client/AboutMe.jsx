import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { MdDeveloperBoard, MdWork, MdOutlineStorage } from "react-icons/md";
import { FaReact, FaPython, FaServer, FaCloud } from "react-icons/fa";
import { TbChecklist, TbBolt } from "react-icons/tb";
import { IoRibbonOutline } from "react-icons/io5";

const S = {
  pageWrap: {
    padding: "32px 16px 48px",
    color: "#fff",
    position: "relative",
  },
  container: {
    maxWidth: 980,
    margin: "0 auto",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    justifyContent: "center",
    fontWeight: 800,
    letterSpacing: "0.06em",
    margin: "8px 0 18px",
  },
  intro: {
    textAlign: "center",
    lineHeight: 1.9,
    maxWidth: 880,
    margin: "0 auto 26px",
  },
  // Card that keeps everything aligned left
  card: {
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(2px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "22px 18px",
    marginTop: 8,
  },
  // Section heading
  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "14px 0 8px",
    fontWeight: 700,
    textAlign: "left",
  },
  // Uniform icon list
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
  },
  text: { lineHeight: 1.7 },
  // Metrics chips (auto-wrap)
  chipsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
    margin: "4px 0 8px",
  },
  chip: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.06)",
  },
  footerPara: {
    marginTop: 16,
    lineHeight: 1.8,
    textAlign: "left",
  },
};

const IconItem = ({ icon: Icon, children }) => (
  <li style={S.item}>
    <span style={S.iconCell}><Icon size={18} /></span>
    <span style={S.text}>{children}</span>
  </li>
);

export default function AboutMe() {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <div data-aos="fade-up" style={S.pageWrap} className="AboutMe">
      <div style={S.container} className="content-about">
        {/* Title */}
        <h1 style={S.title} className="h-me2">
          <MdDeveloperBoard size={42} color="#fff" /> About Me
        </h1>

        {/* Centered intro */}
        <p style={S.intro}>
          I’m a full-stack developer who builds production apps end-to-end and bakes in testing from day one.
          I hold a Master’s in Applied Computing, Microsoft Azure Fundamentals & Azure AI, and ISTQB® CTFL 4.0(iSQI).
          I’ve shipped two live projects for real companies and work comfortably across React/Vite (TS),
          Node/Express, MySQL, and AWS with CI/CD.
        </p>

        {/* Left-aligned content card */}
        <div style={S.card}>
          {/* Projects section */}
          <h3 style={S.sectionHead}><MdWork /> Created two live projects for real companies</h3>
          <ul style={S.list}>
            <IconItem icon={FaServer}>
              <b>FieldSafe (CVNZ)</b> — React/Vite + TS, Node.js, MySQL on AWS (EB/RDS/Route53/HTTPS).
              Automated workflows, reporting, and role-based access; cut manual handling by ~90%.
            </IconItem>
            <IconItem icon={FaReact}>
              <b>Smart Panel Homes</b> — Built the site, lifted engagement ~80%. Quickly switched backend to
              <b> PHP</b> (hosting didn’t support Node) to enable forms & email with zero extra cost.
            </IconItem>
          </ul>

          {/* Footprint section with chips */}
          <h3 style={S.sectionHead}><TbChecklist /> My project footprint</h3>
          <div style={S.chipsRow}>
            <div style={S.chip}><FaReact size={16} /> <b>React:</b> 11 solo + 4 group</div>
            <div style={S.chip}><FaPython size={16} /> <b>Python:</b> 4 solo + 2 group</div>
            <div style={S.chip}><IoRibbonOutline size={16} /> <b>Voting Center:</b> biggest Python app (user-owned sites + custom CSS)</div>
          </div>

          {/* Day-to-day */}
          <h3 style={S.sectionHead}><TbBolt /> What I do day-to-day</h3>
          <ul style={S.list}>
            <IconItem icon={MdOutlineStorage}>
              Design clean data models (20+ MySQL tables), write API-first backends.
            </IconItem>
            <IconItem icon={TbChecklist}>
              Quality: TDD, Playwright/Jest, Postman; ship safely with traceability.
            </IconItem>
            <IconItem icon={FaCloud}>
              DevOps/Cloud: Git/GitHub flow, GitHub Actions (CI/CD), AWS; Azure familiarity.
            </IconItem>
          </ul>

          {/* Closing line */}
          <p style={S.footerPara}>
            I’m targeting roles where I can combine full-stack delivery, QA automation, and data/DB design to ship fast and safely.
          </p>
        </div>
      </div>
    </div>
  );
}


// export default AboutMe;
