import { parseRequestBody, submitMembershipForm } from '../lib/membership.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  const payload = parseRequestBody(req.body)

  try {
    await submitMembershipForm(payload)
    return res.status(200).json({ message: 'Membership form submitted successfully.' })
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Unable to submit the membership form right now.',
      error: error.details || error.message,
    })
  }
}
