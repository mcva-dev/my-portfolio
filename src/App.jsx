import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import facilicom from './facilicom.png'
import critter from './critter-sitter.png'
import sva from './sva.png'
import ramcos from './ramcos.png'
import trakr from './trakr.png'
import ready2go from './ready2go.png'
import softcode from './softcode.png'
import pnfc from './pnfc.png'
import igsm from './igsm.png'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function App() {
  const active = useActiveSection(sections.map(s => s.id));

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = useCallback(() => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, []);

  return (
    <div>
      <Navbar sections={sections} active={active} onToggleDark={toggleDark} />

      {/* Home */}
      <section id="home" className="pt-28">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Mikavien Acosta</h1>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Junior Frontend Developer • WordPress Developer</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:caballerojosephirah@gmail.com" className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-soft">vienacosta5@gmail.com</a>
                <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700">+63 977 471 6961</span>
                {/* <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700">Antipolo, Rizal, PH</span> */}
              </div>
            </div>
            <div className="justify-self-end">
              <div className="w-full h-48 md:h-64 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 opacity-90"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="py-16 bg-gray-50 dark:bg-gray-900/40">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Summary</motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-gray-700 dark:text-gray-300">
            Junior Frontend Developer with hands-on experience building and optimizing user-facing web interfaces using
            HTML, CSS, JavaScript, and WordPress. Experienced in responsive design, UI/UX consistency, frontend testing, and
            cross-functional collaboration. Currently enhancing frontend engineering skills through the Meta Frontend
            Developer (React) program.</motion.p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Experience</motion.h2>
          <div className="space-y-6">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Frontend Developer - PenOne Digital Corporation</h3>
                <span className="text-sm text-gray-500">February 2026 – Present</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Designed and developed responsive, user-friendly web interfaces using HTML5, CSS3, Bootstrap, and Tailwind.</li>
                <li>Created UI/UX designs in Figma, focusing on usability, visual hierarchy, and intuitive user flows.</li>
                <li>Translated Figma designs into pixel-perfect, high-quality frontend code with strong attention to detail.</li>
                <li>Implemented interactive features and dynamic UI components using JavaScript and React (currently learning).</li>
                <li>Ensured cross-browser compatibility and optimized layouts across various devices and screen sizes.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Quality Assurance Analyst - Seven365 Company</h3>
                <span className="text-sm text-gray-500">July 2024 – March 2026</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Performed manual testing on web and mobile applications to identify UI, usability,
                  and functional issues.</li>
                <li>Created and executed detailed test cases based on frontend and business
                  requirements.</li>
                <li>Conducted cross-browser and cross-device testing to ensure responsive layouts and
                  consistent behavior.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Marketing Associate</h3>
                <span className="text-sm text-gray-500">March 2025 – February 2026</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Contributed to the development of a large-scale candidate database and job portal
                  with 6,000+ profiles, focusing on frontend structure and usability.</li>
                <li>Implemented and maintained dynamic filtering logic (location, department, role
                  type) to improve search accuracy and user experience.</li>
                <li>Structured and optimized frontend data presentation using ACF and
                  taxonomy-based filters.</li>
                <li>Ensured UI consistency and responsiveness across thousands of dynamically
                  generated profile pages.</li>

              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">WordPress Developer - Ready2Go Services</h3>
                <span className="text-sm text-gray-500">October 2024 – Apr 2025</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Built and customized responsive websites using HTML, CSS, JavaScript, and
                  WordPress.</li>
                <li>Implemented UI/UX improvements focused on intuitive navigation and conversion
                  optimization.</li>
                <li>Optimized frontend performance and structure to support SEO and accessibility best
                  practices.</li>
                <li>Translated design concepts into functional, mobile-friendly layouts.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">WordPress Developer - Seven365 Company</h3>
                <span className="text-sm text-gray-500">March 2024 – July 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed responsive web pages based on Figma designs, ensuring accurate
                  frontend implementation.</li>
                <li>Collaborated with SEO and content teams to align layout structure with search and
                  usability goals.</li>
                <li>Tested frontend features across browsers and devices to ensure consistent behavior.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">WordPress Developer - PNFC (Project-Based)</h3>
                <span className="text-sm text-gray-500">July 2024 – Nov 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Design and develop a modern, responsive website that effectively represents Philippine
                  Nutri-Foods Corporation.</li>
                <li>Maintain and update the website regularly to reflect new products, news, and other
                  relevant content.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">IT / Admin Staff - Agapeleo Business and Accounting Services Co.</h3>
                <span className="text-sm text-gray-500">May 2023 – Feb 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Designed, developed, and implemented WordPress sites, themes, and plugins for the
                  Company website.</li>
                <li>Reconciled account files and produced monthly reports.</li>
                <li>Coordinated recordkeeping and other administrative functions.</li>
                <li>Tracked office supplies and restocked low items to keep team members on-task and
                  productive.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">MIS Staff - Sta. Lucia Land, Inc</h3>
                <span className="text-sm text-gray-500">June 2022 – Apr 2023</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Aiding system administrators in processing papers required for system workflow.</li>
                <li>Correcting incorrect amounts that teller, collection assistant, and accountant input into
                  the system.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900/40">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Skills</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-3">Technical Skills</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Frontend: HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React (learning)</li>
                <li>UI/UX & Design: Figma, responsive design, cross-browser compatibility, pixel-perfect implementation, Figma to code</li>
                <li>Tools: Git, GitHub, Figma</li>
                <li>CMS & Backend Exposure: WordPress, PHP, Advanced Custom Fields (ACF)</li>
                <li>Testing & QA: Manual testing, cross-browser testing, bug documentation</li>
                <li>Other: UI/UX principles, basic SEO</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Education & Certifications</motion.h2>
          <motion.ul variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Full Stack Web Developer - Kodego 2023</li>
            <li>Civil Service Exam - Professional Passer - March 2023</li>
            <li>B.S. in Information Technology – ICCT Colleges</li>
          </motion.ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900/40">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Projects</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Facilicom', url: 'https://facilicom.vixencreative.agency/', image: facilicom },
              { name: 'Critter Sitter', url: 'https://crittersitter.vixencreative.agency/', image: critter },
              { name: 'SVA Recruitment', url: 'https://svarecruitment.com/', image: sva },
              { name: 'Ramcos Nulud', url: 'https://ramcosnulud.com/', image: ramcos },
              { name: 'Trakr Landing Page', url: 'https://ready2goservices.app/', image: trakr },
              { name: 'Ready2Go Services', url: 'https://ready2goservices.com.au/', image: ready2go },
              { name: 'PNFC', url: 'https://www.nutrifoods.com.ph/', image: pnfc },
              { name: 'SoftCode365', url: 'https://www.softcode365.com/', image: softcode },
              { name: 'International Graduate School of Ministry', url: 'https://igsm-ph.org/', image: igsm },
            ].map((p) => (
              <motion.a
                key={p.url}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-soft transition block"
              >
                <div className="w-full h-48">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="font-semibold text-gray-800 dark:text-gray-100 pt-5">{p.name}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400 break-all">{p.url}</div>

              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">Contact</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <p>Email: <a className="text-blue-600 dark:text-blue-400" href="vienacosta5@gmail.com">vienacosta5@gmail.com</a></p>
            <p>Phone: <a className="text-blue-600 dark:text-blue-400" href="tel:+639774716961">+63 977 471 6961</a></p>
            <p>Location: Antipolo, Rizal, Philippines</p>
          </motion.div>
          <div className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Mikavien Acosta
          </div>
        </div>
      </section>
    </div>
  );
}
