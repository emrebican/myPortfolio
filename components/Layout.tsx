import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SideLinks from './SideLinks/SideLinks'

const Layout = ({ children }: any) => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)

  const handleViewMenu = () => {
    setViewMenu(!viewMenu)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <>
      <Navbar
        viewMenu={viewMenu}
        handleViewMenu={handleViewMenu}
        shadow={shadow}
      />
      <div className="px-12">{children}</div>
      <SideLinks />
      <Footer />
    </>
  )
}

export default Layout
