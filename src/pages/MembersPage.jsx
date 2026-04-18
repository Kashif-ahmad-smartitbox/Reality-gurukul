import { useMemo, useState } from 'react'

const benefits = [
  'Access curated chapter events and live sessions',
  'Peer networking with verified professionals',
  'Mentorship and practical market frameworks',
  'Collaboration opportunities across city chapters',
]

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

export default function MembersPage() {
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
    <main className="min-h-[calc(100vh-45px)] bg-[linear-gradient(180deg,#fff7f0_0%,#ffffff_26%,#fffdfb_100%)] px-4 pb-10 pt-8 sm:px-6 sm:pb-[52px] sm:pt-[38px]">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">REALTY GURUKUL MEMBERSHIP FORM</p>
        <h1 className="mt-[10px] max-w-[760px] text-[clamp(1.95rem,4vw,3.5rem)] leading-[1.08]">
          <strong>Join the Circle of Serious Real Estate Professionals</strong>
        </h1>
        <p className="mt-[14px] max-w-[760px] text-[clamp(1rem,2.2vw,1.125rem)] leading-[1.6] text-[#515151]">
          Learn. Connect. Grow. Become a part of Realty Gurukul and elevate your real estate journey.
        </p>
      </section>

      <section className="mx-auto mt-[30px] grid max-w-[1180px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[28px] border border-[#ffd7bf] bg-[linear-gradient(180deg,#fa6a21_0%,#df5a17_100%)] p-6 text-white shadow-[0_22px_65px_rgba(250,106,33,0.26)] sm:p-8">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#fff0e5]">
            Members Area
          </p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.08]">
            Grow with a high-quality community built for action.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-[#ffe6d6]">
            Limited Seats | High-Quality Community | First 100 Members Advantage
          </p>

          <div className="mt-8 rounded-[24px] border border-white/15 bg-black/10 p-5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">Member Benefits</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-[1.6] text-[#fff0e7] sm:text-[15px]">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd4af]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/15 bg-white/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#ffe0cb]">Next Step</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#fff7f2] sm:text-[15px]">
              Submit your form and proceed to registration desk today.
            </p>
          </div>
        </aside>

        <section className="rounded-[28px] border border-[#f1d4bf] bg-white p-5 shadow-[0_18px_60px_rgba(72,31,2,0.08)] sm:p-8">
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

            <div className="flex flex-col gap-3 rounded-[24px] border border-[#ffe4d2] bg-[#fff7f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
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
      </section>
    </main>
  )
}
