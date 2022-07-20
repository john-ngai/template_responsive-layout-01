// Packages
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
// Stylesheet
import './style.scss';

export default function App() {
  const [page, setPage] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Layout page={page} />}>
        <Route index element={
          <Home setPage={setPage} />
        } />
        <Route path='about' element={
          <About setPage={setPage} />
        } />
        <Route path='contact' element={
          <Contact setPage={setPage} />
        } />
      </Route>
    </Routes>
  );
}