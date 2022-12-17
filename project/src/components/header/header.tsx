import Logo from '../logo/logo';

function Header({children}: {children: JSX.Element | JSX.Element[]}): JSX.Element {
  return (
    <header className='page-header user-page__head'>
      <Logo isLightVersion={false}/>

      {children}
    </header>
  );
}

export default Header;
