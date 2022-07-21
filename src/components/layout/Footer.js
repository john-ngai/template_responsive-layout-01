// Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Stylesheet
import './Footer.scss';

export default function Footer() {
  return (
    <div className='container--footer'>
      <div className='social-media'>
        <span className='icon'>
          <a
            href='https://www.linkedin.com/in/john-ngai/'
            target='_blank'
            rel='noreferror'
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
            /></a>
        </span>
        <span className='icon'>
          <a
            href='https://github.com/john-ngai'
            target='_blank'
            rel='noreferror'
          >
            <FontAwesomeIcon
              icon={['fab', 'github']}
            /></a>
        </span>
        <span className='icon'>
          <a
            href='#'
            target='_blank'
            rel='noreferror'
          >
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
            /></a>
        </span>
      </div>
      <p className='copyright'>
        &copy; 2022 Company. Designed by <a
          href='https://johnngai.com/'
          target='_blank'
          rel='noreferror'
        >John Ngai</a>.
      </p>
    </div>
  );
}