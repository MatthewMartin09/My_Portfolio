import { Link } from 'react-router-dom'
import { useCharacter } from '../context/CharacterContext'
import { characters } from '../data/characters'

export default function Layout({ children }) {
  const { selectedCharacter } = useCharacter()
  const activeCharacter = characters.find((character) => character.id === selectedCharacter)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand">Astra<span>Port</span></Link>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-pill">
          {activeCharacter ? `Companion: ${activeCharacter.name}` : 'Choose your path'}
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>© 2026 Astra Port — crafted for immersive storytelling.</p>
      </footer>
    </div>
  )
}
