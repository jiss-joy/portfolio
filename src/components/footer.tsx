import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";

type InfoBlockProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const InfoBlock = ({ icon, title, description }: InfoBlockProps) => {
  return (
    <div className="flex flex-col text-white  items-center justify-center gap-2">
      {/* <BiPhoneCall className="text-[28px] lg:text-[32px] text-white" /> */}
      <div className="text-[28px] lg:text-[32px] text-white">{icon}</div>
      <h6 className="title">{title}</h6>
      <p className="text-xs">{description}</p>
    </div>
  );
};

const info = [
  {
    icon: <BiPhoneCall />,
    title: "+81 7012994499",
    description: "Monday-Friday from 9:00~19:00",
  },
  {
    icon: <HiOutlineMail />,
    title: "jissjoy1@gmail.com",
    description: "Feel free to drop a mail.",
  },
  {
    icon: <TiLocationOutline />,
    title: "Osaka, Japan",
    description: "Let's grab coffee when you are around.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-primary shadow-sm mt-8 pt-4">
      <div className="w-full mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4">
          {info.map((i) => (
            <InfoBlock
              key={i.title}
              icon={i.icon}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>
        <div className="bg-white/40 h-[0.5px] w-full mt-4" />
        <div className="p-4 md:flex justify-center md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2025{" "}
            <Link href="http://localhost:8055/" className="hover:underline">
              JissJoy
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
