import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SideLinks from './SideLinks/SideLinks'
import { useRouter } from 'next/router'

const Layout = ({ children }: any) => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)
  const [navBG, setNavBG] = useState<string>('#ecf0f3')
  // const [linkColor, setLinkColor] = useState<string>('#4B5563')
  const [linkColor, setLinkColor] = useState<boolean>(true)

  const router = useRouter()
  console.log(router)

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
      router.asPath === '/' ||
      router.asPath === '/#about' ||
      router.asPath === '/#skills' ||
      router.asPath === '/#projects' ||
      router.asPath === '/contact'
    ) {
      setNavBG('#ecf0f3')
      setLinkColor(true)
    } else {
      setNavBG('transparent')
      setLinkColor(false)
    }
  }, [router])

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
