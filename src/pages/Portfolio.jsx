import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { characters } from '../data/characters'
import { useCharacter } from '../context/CharacterContext'

const skills = ['React', 'JavaScript', 'UI Systems', 'Accessibility', 'Motion Design', 'Performance']
const projects = [
  {
    title: 'Quantum Dashboard',
    description: 'A modular analytics workspace built for fast-moving teams.',
    stack: ['React', 'Framer Motion', 'Charting'],
  },
  {
    title: 'Lumen Studio',
    description: 'A polished product showcase for a creative agency.',
    stack: ['Vite', 'CSS', 'Animation'],
  },
]

const experience = [
  { title: 'Lead Frontend Developer', period: '2023 — Present', description: 'Designing high impact interfaces and interactive systems.' },
  { title: 'Product Engineer', period: '2021 — 2023', description: 'Delivered cross-platform experiences with a strong product lens.' },
]

export default function Portfolio() {
  const { selectedCharacter } = useCharacter()
  const activeCharacter = characters.find((character) => character.id === selectedCharacter)

  return (
    <Layout>
      <main className="portfolio-page">
        <section className="hero-section" id="top">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">Portfolio • {activeCharacter?.name || 'Explorer'}</p>
            <h1>Building digital experiences with calm precision.</h1>
            <p>
              I create thoughtful interfaces that feel immersive, modern, and grounded in performance.
            </p>
            <a href="#projects" className="primary-btn">View Projects</a>
          </motion.div>
          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeCharacter ? (
              <>
                <img src={activeCharacter.image} alt={activeCharacter.name} />
                <div className="portrait-caption">
                  <h3>{activeCharacter.name}</h3>
                  <p>{activeCharacter.role}</p>
                </div>
              </>
            ) : (
              <div className="placeholder-portrait">No character selected yet</div>
            )}
          </motion.div>
        </section>

        <section className="content-section" id="about">
          <h2>About Me</h2>
          <p>
            I’m a frontend developer focused on blending elegant visuals with intuitive interactions. My work balances storytelling, usability, and speed.
          </p>
        </section>

        <section className="content-section" id="skills">
          <h2>Skills</h2>
          <div className="chip-list">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <h2>Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="info-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-list">
                  {project.stack.map((item) => (
                    <span key={item} className="chip muted">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <h3>{item.title}</h3>
                <p className="timeline-period">{item.period}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact</h2>
          <p>Let’s create something memorable. Reach out at hello@astraport.dev.</p>
        </section>
      </main>
    </Layout>
  )
}
