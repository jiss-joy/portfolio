import Link from 'next/link';
import SNSButtons from './sns-buttons';

const Footer = () => {
  return (
    <footer className='mt-8 h-fit bg-background pt-4 shadow-sm dark:bg-background-dark'>
      <div className='mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between py-2 pe-4'>
        <div className='justify-center p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm sm:text-center'>
            Copywright © 2025{' '}
            <Link
              href='http://localhost:8055/'
              className='hover:underline'
            >
              Jiss Joy
            </Link>
          </span>
        </div>
        <SNSButtons />
      </div>
    </footer>
  );
};

export default Footer;
