import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { Button } from '../ui/button'

const DownloadCVButton = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="flex items-center gap-2 uppercase">
        <span className="font-medium">View Resume</span>
        <FiExternalLink className="text-xl" />
      </Button>
    </Link>
  )
}

export default DownloadCVButton
