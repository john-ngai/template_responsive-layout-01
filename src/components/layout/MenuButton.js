import './MenuButton.scss';

export default function MenuButton(props) {
  const { openMenu, toggleOpenMenu } = props;
  const naviconClass = openMenu ? 'navicon active' : 'navicon inactive';

  return (
    <div className='container--MenuButton'
      onClick={toggleOpenMenu}
    >
      <div className={naviconClass} />
    </div>
  );
}