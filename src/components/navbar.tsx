'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { TbMenu4 } from 'react-icons/tb';
import ThemeButton from './theme-button';
import Logo from './logo';

type LinkType = {
  path: string;
  label: string;
};

const Navbar = () => {
  const links: LinkType[] = [
    {
      path: '/#about',
      label: 'About Me',
    },
    {
      path: '/#projects',
      label: 'Projects',
    },
    {
      path: '/#testimonials',
      label: 'Testimonials',
    },
  ];

  const pathname = usePathname();
  const point = `/#${pathname}`;

  return (
    <div>
      {/* Desktop Nav */}
      <div className='hidden items-center justify-between gap-6 lg:flex'>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path == point && 'text-accent'
            } font-medium capitalize transition-all hover:text-accent`}
          >
            {link.label}
          </Link>
        ))}
        <Link href='/contact'>
          <Button>Contact Me</Button>
        </Link>
        <ThemeButton classname='hidden lg:flex' />
      </div>
      {/* Mobile Nav */}
      <div className='flex flex-row gap-4 lg:hidden'>
        <ThemeButton classname='lg:hidden' />
        <Sheet>
          <SheetTrigger className='flex items-center justify-center'>
            <TbMenu4 className='text-[32px] text-accent' />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-center'>
            <div className='mb-20 mt-32 text-center text-xl'>
              <Link
                href='/'
                className='flex flex-row'
              >
                <Logo />
              </Link>
            </div>
            <nav className='flex flex-col items-center justify-center gap-4'>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  scroll={false}
                  className={`${
                    link.path == pathname && 'text-accent'
                  } font-medium capitalize transition-all hover:text-accent`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
