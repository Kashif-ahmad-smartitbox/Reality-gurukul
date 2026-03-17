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
      <div className="mx-auto max-w-[1180px] px-6 py-[18px] max-[520px]:px-[14px] max-[520px]:py-[14px]">
        <nav className="flex items-center justify-center gap-[34px] max-[860px]:justify-start max-[860px]:gap-[14px] max-[860px]:overflow-x-auto max-[860px]:pb-1">
          <button
            type="button"
            onClick={() => jumpTo('home')}
            className="border-0 bg-transparent px-0 py-3 text-sm cursor-pointer tracking-[0.5px] text-white transition-opacity hover:opacity-80"
          >
            Home
          </button>
          <NavLink
            to="/about-gurukul"
            className={({ isActive }) =>
              `px-0 py-3 text-sm tracking-[0.5px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            About Gurukul
          </NavLink>
          <NavLink
            to="/members-area"
            className={({ isActive }) =>
              `px-0 py-3 text-sm tracking-[0.5px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            Members Area
          </NavLink>
          <NavLink
            to="/networking"
            className={({ isActive }) =>
              `px-0 py-3 text-sm tracking-[0.5px] text-white transition-opacity hover:opacity-80 ${
                isActive ? 'opacity-80' : ''
              }`
            }
          >
            Networking
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `px-0 py-3 text-sm tracking-[0.5px] text-white transition-opacity hover:opacity-80 ${
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
