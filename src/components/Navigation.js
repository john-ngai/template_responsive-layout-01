// Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Stylesheet
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <input className='menu-btn' type='checkbox' id='menu-btn' />

      <label className='menu-icon' for='menu-btn'>
        <span className='navicon' onClick={() => console.log('navicon clicked!')} />
      </label>

      <ul className='menu'>
        <div className='menu--nav'>
          <label for='menu-btn'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </label>
        </div>

        <div className='menu--social'>
          <span className='icon'>
            <label for='menu-btn'>
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
              />
            </label>
          </span>
          <span className='icon'>
            <label for='menu-btn'>
              <FontAwesomeIcon
                icon={['fab', 'github']}
              />
            </label>
          </span>
          <span className='icon'>
            <label for='menu-btn'>
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
              />
            </label>
          </span>
        </div>
      </ul>
      <div className='shader' />
    </nav >
  );
}