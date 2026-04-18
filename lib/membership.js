import nodemailer from 'nodemailer'

const requiredFields = [
  'fullName',
  'mobileNumber',
  'emailAddress',
  'city',
  'companyName',
  'designation',
  'experience',
  'primaryWorkType',
  'areaOfOperation',
  'propertyType',
  'monthlyClosures',
]

const escapeHtml = (value) =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const formatFieldRows = (payload) => {
  const labels = {
    fullName: 'Full Name',
    mobileNumber: 'Mobile Number',
    emailAddress: 'Email Address',
    city: 'City',
    companyName: 'Company / Firm Name',
    designation: 'Role / Designation',
    experience: 'Years of Experience',
    primaryWorkType: 'Primary Work Type',
    areaOfOperation: 'Area of Operation',
    propertyType: 'Property Type',
    monthlyClosures: 'Approx Monthly Deal Closures',
  }

  return Object.entries(labels)
    .map(
      ([key, label]) =>
        `<tr>
          <td style="padding:12px 14px;border:1px solid #f0d9ca;font-weight:600;color:#7b421d;background:#fff6f0;">${label}</td>
          <td style="padding:12px 14px;border:1px solid #f0d9ca;color:#2d2018;background:#ffffff;">${escapeHtml(payload[key])}</td>
        </tr>`,
    )
    .join('')
}

export const parseRequestBody = (body) => {
  if (!body) {
    return {}
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return {}
    }
  }

  return body
}

export const validateMembershipPayload = (payload) =>
  requiredFields.find((field) => !String(payload[field] ?? '').trim())

export const submitMembershipForm = async (payload) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    const error = new Error('Email service is not configured. Please add EMAIL_USER and EMAIL_PASS.')
    error.statusCode = 500
    throw error
  }

  const missingField = validateMembershipPayload(payload)
  if (missingField) {
    const error = new Error(`Missing required field: ${missingField}`)
    error.statusCode = 400
    throw error
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const adminRecipient = process.env.EMAIL_USER
  const userRecipient = String(payload.emailAddress).trim()
  const safeName = escapeHtml(payload.fullName)

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;background:#fffaf6;padding:24px;color:#2d2018;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #f3ddcf;border-radius:20px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#fa6a21,#df5a17);padding:24px 28px;color:#ffffff;">
          <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.2px;">REALTY GURUKUL MEMBERSHIP FORM</p>
          <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;">New Membership Submission Received</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 18px;line-height:1.7;">A new user has submitted the Realty Gurukul membership form. Their details are below.</p>
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">${formatFieldRows(payload)}</table>
        </div>
      </div>
    </div>
  `

  const userHtml = `
    <div style="font-family:Arial,sans-serif;background:#fffaf6;padding:24px;color:#2d2018;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #f3ddcf;border-radius:20px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#fa6a21,#df5a17);padding:24px 28px;color:#ffffff;">
          <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.2px;">REALTY GURUKUL MEMBERSHIP FORM</p>
          <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;">Application Submitted Successfully</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 14px;line-height:1.7;">Dear ${safeName},</p>
          <p style="margin:0 0 14px;line-height:1.7;">
            Thank you for joining the circle of serious real estate professionals. We have received your membership form successfully.
          </p>
          <p style="margin:0 0 14px;line-height:1.7;">
            Our team will review your details and guide you through the next registration step shortly.
          </p>
          <div style="margin-top:22px;padding:18px 20px;border-radius:16px;background:#fff4eb;border:1px solid #f3ddcf;">
            <p style="margin:0 0 8px;font-weight:700;">Your submitted summary</p>
            <p style="margin:0;line-height:1.7;">City: ${escapeHtml(payload.city)}</p>
            <p style="margin:0;line-height:1.7;">Primary Work Type: ${escapeHtml(payload.primaryWorkType)}</p>
            <p style="margin:0;line-height:1.7;">Property Type: ${escapeHtml(payload.propertyType)}</p>
          </div>
          <p style="margin:22px 0 0;line-height:1.7;">
            Limited Seats | High-Quality Community | First 100 Members Advantage
          </p>
        </div>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Realty Gurukul" <${process.env.EMAIL_USER}>`,
      to: adminRecipient,
      replyTo: userRecipient,
      subject: `New Membership Form Submission - ${payload.fullName}`,
      html: adminHtml,
      text: `
New membership submission received.

Full Name: ${payload.fullName}
Mobile Number: ${payload.mobileNumber}
Email Address: ${payload.emailAddress}
City: ${payload.city}
Company / Firm Name: ${payload.companyName}
Role / Designation: ${payload.designation}
Years of Experience: ${payload.experience}
Primary Work Type: ${payload.primaryWorkType}
Area of Operation: ${payload.areaOfOperation}
Property Type: ${payload.propertyType}
Approx Monthly Deal Closures: ${payload.monthlyClosures}
      `.trim(),
    })

    await transporter.sendMail({
      from: `"Realty Gurukul" <${process.env.EMAIL_USER}>`,
      to: userRecipient,
      subject: 'Realty Gurukul Membership Form Submitted Successfully',
      html: userHtml,
      text: `
Dear ${payload.fullName},

Thank you for submitting your Realty Gurukul membership form.
We have received your details successfully and our team will connect with you soon.
      `.trim(),
    })
  } catch (error) {
    const deliveryError = new Error(
      'The form was saved, but email delivery failed. Please try again in a few minutes.',
    )
    deliveryError.statusCode = 500
    deliveryError.details = error.message
    throw deliveryError
  }
}
