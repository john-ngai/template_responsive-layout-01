// Packages
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// Stylesheet
import './style.scss';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <Home
            page={page}
            setPage={setPage}
          />
        } />
        <Route path='about' element={
          <About
            page={page}
            setPage={setPage}
          />
        } />
        <Route path='contact' element={
          <Contact
            page={page}
            setPage={setPage}
          />
        } />
      </Route>
    </Routes>
  );
}