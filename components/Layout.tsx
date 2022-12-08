import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SideLinks from './SideLinks/SideLinks'
import Welcome from './Welcome/Welcome'

const Layout = ({ children }: any) => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)
  const [navBG, setNavBG] = useState<string>('#ecf0f3')
  const [linkColor, setLinkColor] = useState<boolean>(true)
  const [displayWelcome, setDisplayWelcome] = useState<boolean>(true)

  const router = useRouter()

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

  useEffect(() => {
    if (
      router?.asPath === '/' ||
      router?.asPath === '/#about' ||
      router?.asPath === '/#skills' ||
      router?.asPath === '/#projects' ||
      router?.asPath === '/contact' ||
      router?.route === '/404'
    ) {
      setNavBG('#ecf0f3')
      setLinkColor(true)
    } else {
      setNavBG('transparent')
      setLinkColor(false)
    }
  }, [router])

  useEffect(() => {
    setTimeout(() => {
      setDisplayWelcome(false)
    }, 2000)
  }, [])

  if (displayWelcome) {
    return <Welcome />
  }

  return (
    <>
      <Navbar
        viewMenu={viewMenu}
        setViewMenu={setViewMenu}
        handleViewMenu={handleViewMenu}
        shadow={shadow}
        navBG={navBG}
        linkColor={linkColor}
      />
      <div>{children}</div>
      <SideLinks />
      <Footer />
    </>
  )
}

export default Layout
