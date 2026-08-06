import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111] px-4 py-[14px] text-center text-xs text-[#cfcfcf]">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <p>Realty Gurukul | Where Real Estate Minds Are Built</p>
        <span className="hidden text-[#5b5b5b] sm:inline">|</span>
        <Link to="/privacy-policy" className="text-[#f6a36f] transition hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
