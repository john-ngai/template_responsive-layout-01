// Packages
import { useState } from 'react';
// Stylesheet
import './MenuButton.scss';

export default function MenuButton() {
  const [display, setDisplay] = useState(false);
  
  const toggleDisplayHandler = () => {
    return setDisplay(prev => !prev);
  }
  
  const lineClass = display ? 'line active' : 'line inactive';

  return (
    <div className='container--MenuButton'
      onClick={toggleDisplayHandler}
    >
      <div className={lineClass} />
    </div>
  );
}