import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const sns = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/jiss-joy',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    name: 'github',
    url: 'https://github.com/jiss-joy',
    icon: FaGithub,
    label: 'GitHub',
  },
] as const

const SNSButtons = () => {
  return (
    <div className="flex items-center gap-1">
      {sns.map(({ name, url, icon: Icon, label }) => (
        <Link
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex size-10 items-center justify-center rounded-full text-secondary/45 transition-colors duration-200 hover:bg-primary/15 hover:text-primary"
        >
          <Icon className="size-5" />
        </Link>
      ))}
    </div>
  )
}

export default SNSButtons
