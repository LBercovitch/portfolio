import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
