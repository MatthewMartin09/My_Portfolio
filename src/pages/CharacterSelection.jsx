import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import { useCharacter } from '../context/CharacterContext'
import { characters } from '../data/characters'

export default function CharacterSelection() {
  const navigate = useNavigate()
  const { selectedCharacter, setSelectedCharacter } = useCharacter()

  const handleContinue = () => {
    if (!selectedCharacter) return
    navigate('/portfolio')
  }

  return (
    <main className="selection-page">
      <motion.section
        className="selection-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="section-heading">
          <p className="eyebrow">Character Selection</p>
          <h2>Choose Your Character.</h2>
          <p>Select a guide who will appear throughout your portfolio journey.</p>
        </div>
        <div className="character-grid">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              selected={selectedCharacter === character.id}
              onSelect={setSelectedCharacter}
            />
          ))}
        </div>
        <button
          type="button"
          className="primary-btn"
          onClick={handleContinue}
          disabled={!selectedCharacter}
        >
          Continue
        </button>
      </motion.section>
    </main>
  )
}
