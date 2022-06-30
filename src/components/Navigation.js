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

  return (
    <nav>
      <MenuButton
        openMenu={openMenu}
        toggleOpenMenu={toggleOpenMenuHandler}
      />
      <ul className='menu'>
        <div className='menu--nav'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </div>

        <div className='menu--social'>
          <span className='icon'>
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
              />
          </span>
          <span className='icon'>
              <FontAwesomeIcon
                icon={['fab', 'github']}
              />
          </span>
          <span className='icon'>
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
              />
          </span>
        </div>
      </ul>
      <div className='shader' />
    </nav >
  );
}