import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = useMemo(
    () => [
      { key: 'about', label: 'About Gurukul', to: '/about-gurukul' },
      { key: 'members', label: 'Members Area', to: '/members-area' },
      { key: 'networking', label: 'Networking', to: '/networking' },
      { key: 'contact', label: 'Contact Us', to: '/contact-us' },
    ],
    [],
  )

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const jumpTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setIsMenuOpen(false)
  }

  const desktopTabClass = (isActive) =>
    `inline-flex items-center rounded-full px-4 py-2 text-sm tracking-[0.35px] transition-all duration-200 ${
      isActive
        ? 'bg-white text-[#e3520a] shadow-[0_4px_14px_rgba(0,0,0,0.22)]'
        : 'text-white hover:bg-white/12'
    }`

  const mobileTabClass = (isActive) =>
    `inline-flex items-center rounded-full px-4 py-2 text-sm tracking-[0.35px] transition-all duration-200 ${
      isActive
        ? 'bg-[#e3520a] text-white shadow-[0_4px_14px_rgba(227,82,10,0.28)]'
        : 'text-[#7a3a17] hover:bg-[#ffe8d9]'
    }`

  const isHomeActive = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-[#e3520a]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <span className="text-sm font-semibold tracking-[0.45px] text-white">
            Realty Gurukul
          </span>

          <div className="h-10 w-10" />
        </div>

        <nav className="hidden items-center justify-center gap-2 md:flex lg:gap-3">
          <button
            type="button"
            onClick={() => jumpTo('home')}
            className={desktopTabClass(isHomeActive)}
          >
            Home
          </button>

          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) => desktopTabClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black/45 transition-opacity duration-200 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-[60] h-screen w-[82%] max-w-[320px] bg-[#fef6f1] px-4 pb-6 pt-5 shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-4 flex items-center justify-between border-b border-[#f4c2a3] pb-3">
          <span className="text-base font-semibold tracking-[0.3px] text-[#e3520a]">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#f3b993] text-[#e3520a]"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => jumpTo('home')}
            className={mobileTabClass(isHomeActive)}
          >
            Home
          </button>

          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) => mobileTabClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  )
}
