import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MembersPage from './pages/MembersPage'
import NetworkingPage from './pages/NetworkingPage'
import ConnectPage from './pages/ConnectPage'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-gurukul" element={<AboutPage />} />
        <Route path="/members-area" element={<MembersPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/connect-us" element={<ConnectPage />} />
      </Routes>
      {!isHome && <Footer />}
    </div>
  )
}

export default App
