import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { MdDeveloperBoard, MdWork, MdOutlineStorage } from "react-icons/md";
import { FaReact, FaPython, FaServer, FaCloud } from "react-icons/fa";
import { TbChecklist, TbBolt } from "react-icons/tb";

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
    textAlign: "left",
    lineHeight: 1.9,
    maxWidth: 880,
    margin: "0 auto 22px",
    fontSize: 18,
  },
  card: {
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(2px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "22px 18px",
    marginTop: 8,
  },
  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "18px 0 10px",
    fontWeight: 800,
    textAlign: "left",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    gap: 12,
    alignItems: "start",
    margin: "12px 0",
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
  text: { lineHeight: 1.75, fontSize: 16.5 },
  link: {
    color: "rgb(246, 7, 7)",
    fontWeight: 800,
    textDecoration: "none",
  },
  chipsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10,
    margin: "6px 0 10px",
  },
  chip: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(255,255,255,0.06)",
    fontSize: 14.5,
  },
  footerPara: {
    marginTop: 16,
    lineHeight: 1.85,
    textAlign: "left",
    fontSize: 16.5,
    opacity: 0.95,
  },
};

const IconItem = ({ icon: Icon, children }) => (
  <li style={S.item}>
    <span style={S.iconCell}><Icon size={18} /></span>
    <span style={S.text}>{children}</span>
  </li>
);

export default function AboutMe() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <div data-aos="fade-up" style={S.pageWrap} className="AboutMe">
      <div style={S.container} className="content-about">

        <h1 style={S.title} className="h-me2">
          <MdDeveloperBoard size={42} color="#fff" /> About Me
        </h1>

        {/* ✅ Short story + positioning (no repeating badges/certs) */}
        <p style={S.intro} data-aos="fade-down-right">
          I’m Sue — a full-stack developer based in Auckland. I build modern web apps end-to-end: clean UI, strong APIs,
          solid database design, and reliable deployments.
          <br /><br />
          I started my career in education (teacher + computer workshop supervisor), then moved into software.
          Since then, I’ve focused on building real products for real businesses — not just demos.
        </p>

        <div style={S.card} data-aos="fade-up">
          {/* ✅ Strong proof (projects) */}
          <h3 style={S.sectionHead}><MdWork /> Proof of work (selected)</h3>
          <ul style={S.list}>
            <IconItem icon={FaServer}>
              <b>Shower Power</b> — full-stack production website (React, Node/Express, PostgreSQL, Docker, Azure App Service, CI/CD).
              <br />
              <a style={S.link} href="https://www.showerpower.co.nz/" target="_blank" rel="noreferrer">
                https://www.showerpower.co.nz/
              </a>
              <br />
              Lead capture (contact + quote forms) with email notifications, responsive UI, and performance-focused layout.
            </IconItem>

            <IconItem icon={FaPython}>
              <b>Lodge-Matariki476</b> — live on Railway for stakeholder review (Azure deployment next).
              <br />
              Full-stack build with clean admin/member flows and production-ready structure.
            </IconItem>

            <IconItem icon={FaCloud}>
              <b>FieldSafe (CVNZ)</b> — admin dashboard on AWS (React/TS, Node, MySQL; EB/RDS/Route53/HTTPS).
              <br />
              Built to streamline operations with role-based access and reporting workflows.
            </IconItem>

            <IconItem icon={FaReact}>
              <b>Smart Panel Homes</b> — business website focused on engagement + lead capture.
              <br />
              Delivered a modern UI and adjusted backend to fit hosting constraints while keeping costs low.
            </IconItem>
          </ul>

          {/* ✅ What you do (simple, non-repetitive) */}
          <h3 style={S.sectionHead}><TbBolt /> What I’m strong at</h3>
          <div style={S.chipsRow}>
            <div style={S.chip}><FaReact size={16} /> <b>Frontend:</b> UX-first React UI, responsive design, animation when useful</div>
            <div style={S.chip}><FaServer size={16} /> <b>Backend:</b> clean REST APIs, auth patterns, email workflows</div>
            <div style={S.chip}><MdOutlineStorage size={16} /> <b>Data:</b> schema design, queries, admin dashboards</div>
            <div style={S.chip}><TbChecklist size={16} /> <b>Quality:</b> testing mindset, edge cases, maintainable code</div>
          </div>

          {/* ✅ Remote AI work (short + credible) */}
          <h3 style={S.sectionHead}><TbChecklist /> Current remote work</h3>
          <ul style={S.list}>
            <IconItem icon={TbChecklist}>
              <b>Alignerr</b> + <b>Labelbox</b> — AI correction / quality review work: checking correctness, following strict guidelines,
              and delivering structured feedback.
            </IconItem>
          </ul>

          {/* ✅ Closing */}
          <p style={S.footerPara}>
            I’m looking for a full-time role where I can contribute as a full-stack developer — building real features, improving reliability,
            and shipping clean, user-friendly products.
          </p>
        </div>
      </div>
    </div>
  );
}
