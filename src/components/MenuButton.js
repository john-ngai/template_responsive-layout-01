// Packages
import { useState } from 'react';
// Stylesheet
import './MenuButton.scss';

export default function MenuButton(props) {
  const { openMenu, toggleOpenMenu } = props;
  
  const lineClass = openMenu ? 'line active' : 'line inactive';

  return (
    <div className='container--MenuButton'
      onClick={toggleOpenMenu}
    >
      <div className={lineClass} />
    </div>
  );
}