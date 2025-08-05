import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Landing = lazy(() => import('./pages/landing'));
const About = lazy(() => import('./pages/about'));
const Projects = lazy(() => import('./pages/projects'));
const Contact = lazy(() => import('./pages/contact'));
const CountryQuiz = lazy(() => import('./pages/projects/country-quiz'));

function App() {
  return (
    <Suspense fallback={<></>}>
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
