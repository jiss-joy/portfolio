import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const SNSButtons = ({ linkedinUrl, githubUrl }: { linkedinUrl?: string | null, githubUrl?: string | null }) => {
  const sns = [
    {
      name: 'linkedin',
      url: linkedinUrl,
      icon: <FaLinkedinIn />,
    },
    { name: 'github', url: githubUrl, icon: <FaGithub /> },
  ]
  return (
    <div className="flex gap-2">
      {sns.map(({ name, url, icon }) => {
        return url && (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
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
