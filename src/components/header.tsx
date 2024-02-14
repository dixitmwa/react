import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import Logo from "../assets/logo/logo.png";
import LoginIcon from "../assets/login-icon.png"
import LogoutIcon from "../assets/logout.png"

const Header = () => {
  const router = useRouter()
  const [user, setUser] = useState<any>("")

  useEffect(() => {
    const userEmail = localStorage.getItem("email")
    setUser(userEmail)
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  return (
    <AppBar className="fixed-header-wrap">
      <Container className="header-container">
        <Box className="inner-header-wrap">
          <Box className="logo-left-wrap">
            <Link href="/"><Image height={100} width={200} src={Logo.src} alt="Logo" /></Link>
          </Box>
          <Box className="menu-list-wrap">
            <Link className="menu-title-list-wrap" href="/">Home</Link>
            <Link className="menu-title-list-wrap " href="/#about">About</Link>
            <Link className="menu-title-list-wrap " href="/#test-category">Test Categories</Link>
            <Link className="menu-title-list-wrap " href="/#available-test">Available Tests</Link>
            <Link className="menu-title-list-wrap " href="/#custom-test">Custom Tests</Link>
            <Link className="menu-title-list-wrap " href="/#desktop-test">Desktop Tests</Link>
            <Link className="menu-title-list-wrap " href="/#connect">Connect</Link>
            {
              user &&
              <Link className="menu-title-list-wrap " href="/profile?tab=user-profile">Profile</Link>
            }
          </Box>
          {!user ? <Button className='login-btn-warp' onClick={() => router.push('/auth/login')} >
            <Image width={19} height={19} src={LoginIcon.src} alt="login" /> Login
          </Button> :
            <Button className='logout-btn-warp' onClick={handleLogout} >
              <Image width={19} height={19} src={LogoutIcon.src} alt="logout" /> Logout
            </Button>}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;  