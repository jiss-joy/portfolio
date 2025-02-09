import Link from 'next/link';
import React from 'react';
import Navbar from './navbar';
import Logo from './logo';

const Header = () => {
  return (
    <header className='container sticky top-0 z-50 mx-auto bg-background px-4 py-4 dark:bg-background-dark lg:px-0'>
      <div className='mx-auto flex flex-row items-center justify-between'>
        <Link
          href='/'
          className='flex flex-row'
        >
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
