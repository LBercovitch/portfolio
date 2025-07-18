import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
