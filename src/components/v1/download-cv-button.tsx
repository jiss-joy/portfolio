import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import { Button } from '../ui/button'

const DownloadCVButton = () => {
  return (
    <Link
      href="https://drive.google.com/uc?export=download&id=19DpjLnchFAOraCTmi3QFVLP4CiD7UP3Z"
      download="Jiss Joy - Resume"
      target="_blank"
    >
      <Button className="flex items-center gap-2 uppercase">
        <span className="font-medium">Download Resume</span>
        <FiDownload className="text-xl" />
      </Button>
    </Link>
  )
}

export default DownloadCVButton
