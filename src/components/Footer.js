// Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Stylesheet
import './Footer.scss';

export default function Footer() {
  return (
    <div className='container--footer'>
      <div className='social-media'>
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

      <p className='copyright'>
        &copy; 2022 Company. Designed by <a
          href='https://johnngai.com/'
          target='_blank'
        >John Ngai</a>.
      </p>
    </div>
  );
}