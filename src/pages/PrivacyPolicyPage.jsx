const sections = [
  {
    title: '1. Information Received, Collected And Stored by The Company',
    paragraphs: [
      'A. Information Supplied By Users',
      'Registration data: When you register on the Sites for the Service, we ask you to provide basic contact information such as your name, sex, age, address, pin code, contact number, occupation, interests and email address etc. When you register using your other accounts like Facebook, Twitter, Gmail etc. we shall retrieve information from such account to continue to interact with you and to continue providing the Services.',
      'Subscription or paid service data: When you choose any subscription or paid service provided as part of our Services, we or our payment gateway provider may collect your purchase, address or billing information, including your credit card number and expiration date etc. However, when you order using an in-app purchase option on any of the applications of the Company, the same are handled by such mobile operating system platform providers. The subscriptions or paid Services may be on auto renewal mode unless cancelled. If at any point you do not wish to auto-renew your subscription, you may cancel your subscription before the end of the subscription term.',
      'Voluntary information: We may collect additional information at other times, including but not limited to, when you provide feedback, comments, change your content or email preferences, respond to a survey, or communicate with us.',
    ],
  },
  {
    title: '2. Information Automatically Collected / Tracked While Navigation',
    paragraphs: [
      'Cookies: To improve the responsiveness of the Sites for our users, we may use cookies or similar electronic tools to collect information and assign each visitor a unique, random user identification. Unless you voluntarily identify yourself, we will have no way of knowing who you are. Our advertisers may also assign their own cookies to your browser, a process that we do not control.',
      'Opting out: If a user opts out using Ads Settings, the unique DoubleClick cookie ID on the user browser is overwritten with the phrase "OPT_OUT". Because there is no longer a unique cookie ID, the opt-out cookie cannot be associated with a particular browser.',
      'Log file information: We automatically collect limited information about your computer connection to the Internet and your device, including IP address, browser type and version, operating system, device name, serial number or unique identification number, CPU speed, and connection speed.',
      'Clear GIFs: We may use clear GIFs or web beacons to track online usage patterns in an anonymous manner, and in HTML-based emails to track which emails are opened by recipients.',
    ],
  },
  {
    title: '3. Information From Other Sources',
    paragraphs: [
      'We may receive information about you from other sources, add it to our account information, and treat it in accordance with this Policy.',
      'Demographic and other information: We may reference other sources of demographic and other information in order to provide you with more targeted communications and promotions. We use Google Analytics, among others, to track user behaviour on our Sites. Reports are anonymous and cannot be associated with any individual personally identifiable information that you may have shared with us.',
      'Links to third-party sites / ad-servers: The Sites may include links to other websites or applications. Such websites or applications are governed by their respective privacy policies, which are beyond our control.',
    ],
  },
  {
    title: '4. How Collected Data Is Used',
    paragraphs: [
      'The information supplied by users enables us to improve the Services and provide the most user-friendly experience. The Company may use user information to maintain, protect, and improve the Services, including advertising and personalisation on the Sites, and for developing new services.',
      'We may use your email address or other personally identifiable information to send commercial or marketing messages about our Services and additional updates and features about third-party products and services, with an option to subscribe or unsubscribe where feasible. We may also use your email address for non-marketing or administrative purposes such as notifying you of major changes, customer service, and billing.',
      'We use third-party advertising companies to serve ads when you visit or use our Sites or Services. These companies may use information excluding your name, address, email address, telephone number, or other personally identifiable information about your visits or use in order to provide advertisements about goods and services of interest to you.',
    ],
  },
  {
    title: '5. Information Sharing',
    paragraphs: [
      'Personal information will be used to allow you to log in to your account on the Site, resolve specific service issues, inform you of new services or features, and communicate with you in relation to your use of the Site.',
      'Any other information collected may be used for business purposes, including user activity related to residential or commercial real estate, rental properties, associated services, analytics, improving the Site or user experience, and providing targeted advertisements to you.',
      'The Company may share your information without prior consent in limited circumstances, including within its group companies and with officers and employees who process personal information on its behalf, subject to appropriate confidentiality and security measures.',
      'The Company may also present information to advertisers and third parties in the form of aggregated statistics on traffic to various pages within the Site. We do not provide personally identifiable information to third-party websites, advertisers, or ad-servers without your consent.',
    ],
  },
  {
    title: '6. Accessing And Updating Personal Information',
    paragraphs: [
      'When you use the Services or Sites, we make good faith efforts to provide you, as and when requested, with access to your personal information and to correct or amend inaccurate or deficient information where feasible, subject to legal or legitimate business retention requirements.',
      'We may decline requests that are unreasonably repetitive, require disproportionate technical effort, jeopardize the privacy of others, are extremely impractical, or where access is not otherwise required. Where we provide access and correction, we perform this service free of charge except where it would require disproportionate effort.',
    ],
  },
  {
    title: '7. Information Security',
    paragraphs: [
      'We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. These include internal reviews of data collection, storage, and processing practices and security measures.',
      'However, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted over the Internet.',
    ],
  },
  {
    title: '8. Updates / Changes',
    paragraphs: [
      'The internet is an ever-evolving medium. We may alter this Policy from time to time to incorporate necessary changes in technology, applicable law, or any other variant. We reserve the right to change the terms of this Policy or the Terms of Use at any time.',
      'Any changes will be effective immediately on notice, which may be given by posting the new policy on the Sites. Your use of the Sites or Services after such notice will be deemed acceptance of such changes.',
    ],
  },
  {
    title: '9. Miscellaneous',
    paragraphs: [
      'We use commercially reasonable security measures to protect the loss, misuse, and alteration of the information under our control. However, we cannot absolutely guarantee the protection of any information shared with us.',
      'Customers are responsible for maintaining the secrecy and accuracy of their password, email address, and other account information at all times. The Company is not responsible for personal data transmitted to a third party as a result of incorrect account-related information.',
      'Our Site may contain links to third-party websites. Navigating to another website does not make the Company liable for misuse of any information by any website controller to which we may link.',
    ],
  },
  {
    title: '10. Questions / Grievance Redressal',
    paragraphs: [
      'Any complaints, abuse, or concerns with regards to the use, processing, and disclosure of information provided by you, or breach of these terms, should be informed to the designated Grievance Officer via email signed with an electronic signature to info@realtygurukul.com.',
      'Mr. Sandeep Dhatwalia (Grievance Officer), Realty Gurukul, 217, Apollo Premier, Vijay Nagar Square, Indore, MP 452001. Email: info@realtygurukul.com. Phone: +91 88399 25211.',
      'This Privacy Policy is subject to changes. Please periodically review this page for the latest information on our privacy practices.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-[#fffaf6] px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10">
      <section className="mx-auto max-w-[980px] rounded-[24px] border border-[#f5d3bd] bg-white px-5 py-6 shadow-[0_16px_50px_rgba(227,82,10,0.08)] sm:px-8 sm:py-8">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">LEGAL</p>
        <h1 className="mt-2 text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] text-[#1f1f1f]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-[1.75] text-[#565656] sm:text-[15px]">
          This privacy policy explains the policy regarding the collection, use,
          disclosure, and transfer of your information by Realty Gurukul and/or
          its subsidiaries or affiliates in relation to its websites, platforms,
          applications, and related services.
        </p>
        <p className="mt-4 text-sm leading-[1.75] text-[#565656] sm:text-[15px]">
          This Policy forms part of the Terms of Use and becomes effective from
          the date and time a user registers with the Site and accepts the terms
          and conditions. By using the Realty Gurukul website or its services,
          you consent to the collection, storage, use, transfer, sharing, and
          distribution of the personal information you provide for the services
          we offer.
        </p>
        <p className="mt-4 text-sm leading-[1.75] text-[#565656] sm:text-[15px]">
          Realty Gurukul respects the privacy of its users and is committed to
          protecting it in all respects. The information collected includes
          information supplied by users and information automatically tracked
          while navigating the Site.
        </p>
      </section>

      <section className="mx-auto mt-6 flex max-w-[980px] flex-col gap-4">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[20px] border border-[#f0dfd4] bg-white px-5 py-5 sm:px-7"
          >
            <h2 className="text-lg font-semibold text-[#a14607] sm:text-xl">{section.title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-[1.8] text-[#4f4f4f] sm:text-[15px]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-6 max-w-[980px] rounded-[20px] border border-[#f0dfd4] bg-[#fff4ec] px-5 py-5 text-sm leading-[1.8] text-[#5c452f] sm:px-7 sm:text-[15px]">
        <p>
          Your Trusted Partner in Property Search. All trademarks, logos, and
          names are properties of their respective owners. All Rights Reserved.
          Copyright 2026 Realty Gurukul.
        </p>
      </section>
    </main>
  )
}
