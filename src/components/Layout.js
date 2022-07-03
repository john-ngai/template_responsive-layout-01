// Packages
import { Outlet } from 'react-router-dom';
// Components
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
// Stylesheet
import './Layout.scss';

export default function Layout({ page }) {
  return (
    <div className='app'>
      <Header />
      <Navigation page={page} />
      <div className='page'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}