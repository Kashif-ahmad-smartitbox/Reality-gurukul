import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { parseRequestBody, submitMembershipForm } from './lib/membership.js'

const membershipApiPlugin = () => {
  const handleRequest = async (req, res) => {
    if (!req.url?.startsWith('/api/membership')) {
      return false
    }

    res.setHeader('Content-Type', 'application/json')

    if (req.method !== 'POST') {
      res.statusCode = 405
      res.end(JSON.stringify({ message: 'Method not allowed.' }))
      return true
    }

    const chunks = []
    for await (const chunk of req) {
      chunks.push(chunk)
    }

    try {
      const rawBody = Buffer.concat(chunks).toString('utf8')
      const payload = parseRequestBody(rawBody)

      await submitMembershipForm(payload)

      res.statusCode = 200
      res.end(JSON.stringify({ message: 'Membership form submitted successfully.' }))
    } catch (error) {
      res.statusCode = error.statusCode || 500
      res.end(
        JSON.stringify({
          message: error.message || 'Unable to submit the membership form right now.',
          error: error.details || error.message,
        }),
      )
    }

    return true
  }

  return {
    name: 'membership-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const handled = await handleRequest(req, res)
        if (!handled) {
          next()
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const handled = await handleRequest(req, res)
        if (!handled) {
          next()
        }
      })
    },
  }
}


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  Object.assign(process.env, env)

  return {
    plugins: [react(), tailwindcss(), membershipApiPlugin()],
  }
})
