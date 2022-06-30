// Packages
import { Outlet } from 'react-router-dom';
// Components
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
// Stylesheet
import './Layout.scss';

export default function Layout() {
  return (
    <div className='app'>
      <Header />
      <Navigation />
      <div className='page'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}