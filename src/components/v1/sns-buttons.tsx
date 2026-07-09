import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const sns = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/jiss-joy',
    icon: <FaLinkedinIn />,
  },
  { name: 'github', url: 'https://github.com/jiss-joy', icon: <FaGithub /> },
]

const SNSButtons = () => {
  return (
    <div className="flex gap-2">
      {sns.map(({ name, url, icon }) => {
        return (
          <Link
            key={name}
            href={url}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-base text-accent duration-500 hover:bg-accent  hover:text-white hover:transition-all"
          >
            {icon}
          </Link>
        )
      })}
    </div>
  )
}

export default SNSButtons
