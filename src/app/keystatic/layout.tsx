import { notFound } from 'next/navigation'
import { isKeystaticAdminEnabled } from '@/lib/keystatic/storage'
import KeystaticApp from './keystatic'

export default function Layout() {
  if (!isKeystaticAdminEnabled) {
    notFound()
  }

  return (
    <KeystaticApp />
  )
}
