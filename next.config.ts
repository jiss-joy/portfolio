import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The resume moved to the CMS-managed public/files/; keeps links shared before the move working
      { source: '/resume.pdf', destination: '/files/resume.pdf', permanent: true },
    ]
  },
}

export default nextConfig
