import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loaders/loader';

const Landing = lazy(() => import('./pages/landing'));
const About = lazy(() => import('./pages/about'));
const Projects = lazy(() => import('./pages/projects'));
const Contact = lazy(() => import('./pages/contact'));
const CountryQuiz = lazy(() => import('./pages/projects/country-quiz'));

function App() {
  return (
    <Suspense fallback={<div className="grid place-items-center h-full min-h-screen"><Loader bgColor={"bg-neutral-100"} spinnerColor={"spinner-[#333]"}/></div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/country-quiz" element={<CountryQuiz />} />
      </Routes>
    </Suspense>
  )
}

export default App;
