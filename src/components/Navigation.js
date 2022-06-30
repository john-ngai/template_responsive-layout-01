// Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
// Components
import MenuButton from './MenuButton';
// Stylesheet
import './Navigation.scss';

export default function Navigation() {
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
          <li onClick={toggleOpenMenuHandler}>Home</li>
          <li onClick={toggleOpenMenuHandler}>About</li>
          <li onClick={toggleOpenMenuHandler}>Contact</li>
        </div>

        <div className='menu--social'>
          <span className='icon'
            onClick={toggleOpenMenuHandler}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </span>
          <span className='icon'
            onClick={toggleOpenMenuHandler}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </span>
          <span className='icon'
            onClick={toggleOpenMenuHandler}
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </span>
        </div>
      </ul>
      <div className='shader' />
    </nav >
  );
}