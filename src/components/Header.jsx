import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const jumpTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#e3520a]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-3 sm:px-6 sm:py-4">
        <nav className="flex items-center justify-start gap-4 overflow-x-auto pb-1 text-nowrap md:justify-center md:gap-8">
          <button
            type="button"
            onClick={() => jumpTo('home')}
            className="shrink-0 cursor-pointer border-0 bg-transparent px-0 py-2.5 text-sm tracking-[0.4px] text-white transition-opacity hover:opacity-80"
          >
            Home
          </button>
          <NavLink
            to="/about-gurukul"
            className={({ isActive }) =>
              `shrink-0 px-0 py-2.5 text-sm tracking-[0.4px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            About Gurukul
          </NavLink>
          <NavLink
            to="/members-area"
            className={({ isActive }) =>
              `shrink-0 px-0 py-2.5 text-sm tracking-[0.4px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            Members Area
          </NavLink>
          <NavLink
            to="/networking"
            className={({ isActive }) =>
              `shrink-0 px-0 py-2.5 text-sm tracking-[0.4px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            Networking
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `shrink-0 px-0 py-2.5 text-sm tracking-[0.4px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
