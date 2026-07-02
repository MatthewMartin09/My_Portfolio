import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CharacterProvider } from './context/CharacterContext'
import CharacterSelection from './pages/CharacterSelection'
import Portfolio from './pages/Portfolio'
import Welcome from './pages/Welcome'
import './App.css'

function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/character-selection" element={<CharacterSelection />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  )
}

export default App
