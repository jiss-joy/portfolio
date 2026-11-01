import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { getProfile } from '@/lib/content'

const SNSButtons = async () => {
  const profile = await getProfile()
  const { linkedinUrl, githubUrl } = profile
  const sns = [
    {
      name: 'linkedin',
      url: linkedinUrl,
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      name: 'github',
      url: githubUrl,
      icon: FaGithub,
      label: 'GitHub',
    },
  ] as const
  return (
    <div className="flex items-center gap-1">
      {sns.map(({ name, url, icon: Icon, label }) => url && (
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
