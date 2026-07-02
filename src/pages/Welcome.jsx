import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <main className="welcome-page">
      <motion.section
        className="welcome-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Interactive Portfolio</p>
        <h1>Enter the Next Chapter</h1>
        <p className="welcome-copy">
          Choose your character, then step into a modern portfolio experience shaped by motion, clarity, and intent.
        </p>
        <Link to="/character-selection" className="primary-btn">
          Start
        </Link>
      </motion.section>
    </main>
  )
}
