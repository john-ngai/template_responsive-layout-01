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
    <div className='container--layout'>
      <Header />
      <Navigation />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}