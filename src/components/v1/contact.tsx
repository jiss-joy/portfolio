import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { TiLocationOutline } from 'react-icons/ti';

type InfoBlockProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const InfoBlock = ({ icon, title, description }: InfoBlockProps) => {
  return (
    <div className='flex flex-col items-center  justify-center gap-2 leading-snug text-white'>
      <div className='text-center text-[28px] text-white lg:text-[36px]'>{icon}</div>
      <h5 className='title lg:h5 text-center'>{title}</h5>
      <p className='text:xs text-center lg:text-sm'>{description}</p>
    </div>
  );
};

const info = [
  {
    icon: <BiPhoneCall />,
    title: '+81 7012994499',
    description: 'Monday-Friday from 9:00~19:00',
  },
  {
    icon: <HiOutlineMail />,
    title: 'jissjoy1@gmail.com',
    description: 'Feel free to drop a mail.',
  },
  {
    icon: <TiLocationOutline />,
    title: 'Osaka, Japan',
    description: "Let's grab coffee when you are around.",
  },
];

const Contact = () => {
  return (
    <div className='flex h-fit flex-col items-center justify-between gap-10 rounded-xl bg-primary p-4 px-20  py-4 lg:flex-row lg:py-12'>
      {info.map((i) => (
        <InfoBlock
          key={i.title}
          icon={i.icon}
          title={i.title}
          description={i.description}
        />
      ))}
    </div>
  );
};

export default Contact;
