import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CharacterContext = createContext(null)

export function CharacterProvider({ children }) {
  const [selectedCharacter, setSelectedCharacter] = useState(() => {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('selected-character') || null
  })

  useEffect(() => {
    if (selectedCharacter) {
      localStorage.setItem('selected-character', selectedCharacter)
    } else {
      localStorage.removeItem('selected-character')
    }
  }, [selectedCharacter])

  const value = useMemo(
    () => ({ selectedCharacter, setSelectedCharacter }),
    [selectedCharacter],
  )

  return (
    <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
  )
}

export function useCharacter() {
  const context = useContext(CharacterContext)

  if (!context) {
    throw new Error('useCharacter must be used within CharacterProvider')
  }

  return context
}
