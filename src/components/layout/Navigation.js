// Packages
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import MenuButton from './MenuButton';
// Stylesheet
import './Navigation.scss';

export default function Navigation({ view }) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenMenuHandler = () => {
    setOpenMenu(prev => !prev);
  }
  let menuClass;
  if (openMenu) {
    menuClass = 'menu active';
    // Disable page scrolling.
    document.body.style.overflow = 'hidden';
  } else {
    menuClass = 'menu inactive';
    // Enable page scrolling.
    document.body.style.overflow = 'auto';
  }

  return (
    <nav>
      <MenuButton
        openMenu={openMenu}
        toggleOpenMenu={toggleOpenMenuHandler}
      />
      <ul className={menuClass}>
        <div className='menu--nav'>
          <Link to='/'>
            <li className={view === 'HOME' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >Home</li>
          </Link>
          <Link to='about'>
            <li className={view === 'ABOUT' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >About</li>
          </Link>
          <Link to='contact'>
            <li className={view === 'CONTACT' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >Contact</li>
          </Link>
        </div>
        <div className='menu--social'>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <a
              href='https://www.linkedin.com/in/john-ngai/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          </span>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <a
              href='https://github.com/john-ngai'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'github']} /></a>
          </span>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </span>
        </div>
      </ul>
      <div className='shader'
        onClick={toggleOpenMenuHandler}
      />
    </nav >
  );
}