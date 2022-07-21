// Packages
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/layout';
import Home from './components/views/Home';
import About from './components/views/About';
import Contact from './components/views/Contact';
// Stylesheet
import './style.scss';

export default function App() {
  const [view, setView] = useState(null);

  return (
    <Routes>
      <Route path='/' element={<Layout view={view} />}>
        <Route index element={
          <Home setView={setView} />
        } />
        <Route path='about' element={
          <About setView={setView} />
        } />
        <Route path='contact' element={
          <Contact setView={setView} />
        } />
      </Route>
    </Routes>
  );
}