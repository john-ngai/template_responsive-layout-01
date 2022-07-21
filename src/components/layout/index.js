// Packages
import { Outlet } from 'react-router-dom';
// Components
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
// Stylesheet
import './index.scss';

export default function Layout({ view }) {
  return (
    <div className='app'>
      <Header />
      <Navigation view={view} />
      <div className='page'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}