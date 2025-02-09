import React from 'react';
import { Button } from './ui/button';
import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';

const DownloadCVButton = () => {
  return (
    <Link
      href='/resume.pdf'
      download='resume'
      target='_blank'
    >
      <Button className='flex items-center gap-2 uppercase'>
        <span className='font-medium'>Download Resume</span>
        <FiDownload className='text-xl' />
      </Button>
    </Link>
  );
};

export default DownloadCVButton;
