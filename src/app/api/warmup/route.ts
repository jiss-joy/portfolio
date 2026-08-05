import { after } from 'next/server'
import { pingProjectServers } from '@/lib/ping-project-servers'

export const dynamic = 'force-dynamic'

export function GET() {
  after(async () => pingProjectServers())
  return new Response(null, { status: 204 })
}
