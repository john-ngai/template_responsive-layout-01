// Components
import Header from './Header';
import Footer from './Footer';
// Stylesheet
import './Layout.scss';

export default function Layout() {
  return (
    <div className='container--layout'>
      <Header />
      <Footer />
    </div>
  );
}