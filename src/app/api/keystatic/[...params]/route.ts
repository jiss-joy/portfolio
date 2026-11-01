import { makeRouteHandler } from '@keystatic/next/route-handler'
import { isKeystaticAdminEnabled } from '@/lib/keystatic/storage'
import config from '../../../../../keystatic.config'

// Guarded here rather than in the proxy: the proxy skips paths containing a dot, and API paths can contain file names
const notFound = () => new Response(null, { status: 404 })

const handlers = isKeystaticAdminEnabled ? makeRouteHandler({ config }) : { GET: notFound, POST: notFound }

export const { POST, GET } = handlers
