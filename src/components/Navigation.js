// Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import MenuButton from './MenuButton';
// Stylesheet
import './Navigation.scss';

export default function Navigation({ page }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenuHandler = () => {
    setOpenMenu(prev => !prev);
  }

  const menuClass = openMenu ? 'menu active' : 'menu inactive';

  return (
    <nav>
      <MenuButton
        openMenu={openMenu}
        toggleOpenMenu={toggleOpenMenuHandler}
      />
      <ul className={menuClass}>
        <div className='menu--nav'>
          <Link to='/'>
            <li className={page === 'HOME' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >Home</li>
          </Link>
          <Link to='about'>
            <li className={page === 'ABOUT' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >About</li>
          </Link>
          <Link to='contact'>
            <li className={page === 'CONTACT' ? 'selected' : ''}
              onClick={toggleOpenMenuHandler}
            >Contact</li>
          </Link>
        </div>

        <div className='menu--social'>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </span>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </span>
          <span className='icon' onClick={toggleOpenMenuHandler}>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </span>
        </div>
      </ul>
      <div className='shader' />
    </nav >
  );
}