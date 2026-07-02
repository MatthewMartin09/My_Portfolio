import { motion } from 'framer-motion'

export default function CharacterCard({ character, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      className={`character-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(character.id)}
      whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="character-card__image-wrap" style={{ '--accent': character.accent }}>
        <img src={character.image} alt={character.name} className="character-card__image" />
      </div>
      <div className="character-card__body">
        <h3>{character.name}</h3>
        <p>{character.role}</p>
        <span>{character.description}</span>
      </div>
    </motion.button>
  )
}
