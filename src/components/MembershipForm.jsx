import { useMemo, useState } from 'react'

const primaryWorkTypes = [
  'Broker / Channel Partner',
  'Builder / Developer',
  'Investor',
  'Consultant',
]

const propertyTypes = ['Residential', 'Commercial', 'Both']

const initialForm = {
  fullName: '',
  mobileNumber: '',
  emailAddress: '',
  city: '',
  companyName: '',
  designation: '',
  experience: '',
  primaryWorkType: '',
  otherWorkType: '',
  areaOfOperation: '',
  propertyType: '',
  monthlyClosures: '',
}

const parseResponsePayload = async (response) => {
  const rawText = await response.text()

  if (!rawText) {
    return null
  }

  try {
    return JSON.parse(rawText)
  } catch {
    return { rawText }
  }
}

export default function MembershipForm({ className = '' }) {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isOtherWorkType = formData.primaryWorkType === 'Others'

  const fieldGroups = useMemo(
    () => [
      {
        title: 'Personal Details',
        fields: [
          ['fullName', 'Full Name', 'text', 'Enter your full name'],
          ['mobileNumber', 'Mobile Number', 'tel', 'Enter your mobile number'],
          ['emailAddress', 'Email Address', 'email', 'Enter your email address'],
          ['city', 'City', 'text', 'Enter your city'],
        ],
      },
      {
        title: 'Professional Details',
        fields: [
          ['companyName', 'Company / Firm Name', 'text', 'Enter company or firm name'],
          ['designation', 'Your Role / Designation', 'text', 'Enter your role'],
          ['experience', 'Years of Experience in Real Estate', 'number', 'Enter years'],
        ],
      },
    ],
    [],
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'primaryWorkType' && value !== 'Others' ? { otherWorkType: '' } : {}),
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          primaryWorkType: isOtherWorkType ? formData.otherWorkType.trim() : formData.primaryWorkType,
        }),
      })

      const result = await parseResponsePayload(response)

      if (!response.ok) {
        const fallbackMessage =
          response.status >= 500
            ? 'The form service is not responding correctly right now. Please try again in a few minutes.'
            : 'Unable to submit the membership form right now.'

        throw new Error(
          result?.message ||
            (result?.rawText ? 'The form endpoint returned an invalid response.' : fallbackMessage),
        )
      }

      setFormData(initialForm)
      setStatus({
        type: 'success',
        message:
          'Your membership form has been submitted successfully. A confirmation email has been sent to your inbox.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while submitting the form.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`rounded-[28px] border border-[#f1d4bf] bg-white p-5 shadow-[0_18px_60px_rgba(72,31,2,0.08)] sm:p-8 ${className}`.trim()}>
      <form className="space-y-7" onSubmit={handleSubmit}>
        {fieldGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-[22px] font-semibold text-[#1f1f1f]">{group.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.fields.map(([name, label, type, placeholder]) => (
                <label key={name} className="grid gap-2 text-sm font-medium text-[#5a4333]">
                  <span>{label}</span>
                  <input
                    required
                    min={type === 'number' ? '0' : undefined}
                    className="h-12 rounded-2xl border border-[#e9d5c4] bg-[#fffaf6] px-4 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#aa8d79] focus:border-[#fa6a21] focus:bg-white"
                    name={name}
                    type={type}
                    value={formData[name]}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-[22px] font-semibold text-[#1f1f1f]">Primary Work Type</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {primaryWorkTypes.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                  formData.primaryWorkType === option
                    ? 'border-[#fa6a21] bg-[#fff1e7] text-[#9d450c]'
                    : 'border-[#ead8c8] bg-[#fffaf6] text-[#5a4333]'
                }`}
              >
                <input
                  required
                  className="h-4 w-4 accent-[#fa6a21]"
                  type="radio"
                  name="primaryWorkType"
                  value={option}
                  checked={formData.primaryWorkType === option}
                  onChange={handleInputChange}
                />
                <span>{option}</span>
              </label>
            ))}

            <label
              className={`grid gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                formData.primaryWorkType === 'Others'
                  ? 'border-[#fa6a21] bg-[#fff1e7] text-[#9d450c]'
                  : 'border-[#ead8c8] bg-[#fffaf6] text-[#5a4333]'
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  required
                  className="h-4 w-4 accent-[#fa6a21]"
                  type="radio"
                  name="primaryWorkType"
                  value="Others"
                  checked={formData.primaryWorkType === 'Others'}
                  onChange={handleInputChange}
                />
                <span>Others</span>
              </span>
              <input
                className="h-11 rounded-xl border border-[#e9d5c4] bg-white px-4 text-[15px] text-[#1f1f1f] outline-none placeholder:text-[#aa8d79] focus:border-[#fa6a21]"
                name="otherWorkType"
                type="text"
                value={formData.otherWorkType}
                placeholder="Please specify"
                disabled={!isOtherWorkType}
                required={isOtherWorkType}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-[#1f1f1f]">Business Information</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[#5a4333] sm:col-span-2">
              <span>Area of Operation (Location)</span>
              <input
                required
                className="h-12 rounded-2xl border border-[#e9d5c4] bg-[#fffaf6] px-4 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#aa8d79] focus:border-[#fa6a21] focus:bg-white"
                name="areaOfOperation"
                type="text"
                value={formData.areaOfOperation}
                placeholder="Enter your area of operation"
                onChange={handleInputChange}
              />
            </label>

            <div className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-[#5a4333]">Type of Properties Dealt In</span>
              <div className="grid gap-3 sm:grid-cols-3">
                {propertyTypes.map((option) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                      formData.propertyType === option
                        ? 'border-[#fa6a21] bg-[#fff1e7] text-[#9d450c]'
                        : 'border-[#ead8c8] bg-[#fffaf6] text-[#5a4333]'
                    }`}
                  >
                    <input
                      required
                      className="h-4 w-4 accent-[#fa6a21]"
                      type="radio"
                      name="propertyType"
                      value={option}
                      checked={formData.propertyType === option}
                      onChange={handleInputChange}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="grid gap-2 text-sm font-medium text-[#5a4333] sm:col-span-2">
              <span>Approx Monthly Deal Closures</span>
              <input
                required
                min="0"
                className="h-12 rounded-2xl border border-[#e9d5c4] bg-[#fffaf6] px-4 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#aa8d79] focus:border-[#fa6a21] focus:bg-white"
                name="monthlyClosures"
                type="number"
                value={formData.monthlyClosures}
                placeholder="Enter approximate monthly closures"
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>

        {status.message ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm leading-[1.6] ${
              status.type === 'success'
                ? 'border-[#c8ebd7] bg-[#effcf4] text-[#21653c]'
                : 'border-[#f4c6c6] bg-[#fff5f5] text-[#9d2f2f]'
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 rounded-3xl border border-[#ffe4d2] bg-[#fff7f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <p className="max-w-[46ch] text-sm leading-[1.7] text-[#7f5333]">
            Limited Seats | High-Quality Community | First 100 Members Advantage
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#fa6a21] px-6 text-sm font-semibold text-white transition hover:bg-[#e85d16] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Membership Form'}
          </button>
        </div>
      </form>
    </section>
  )
}
