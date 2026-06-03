import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastHiring from './pages/PastHiring'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/past-hiring" element={<PastHiring />} />
    </Routes>
  )
}
