// Packages
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
// Stylesheet
import './style.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/'
        element={<Layout />}
      />
    </Routes>
  );
}