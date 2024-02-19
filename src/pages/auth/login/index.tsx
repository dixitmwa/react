import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
import LoginForm from '@/components/loginForm'
import { Box, Container } from '@mui/material'
import authImg from '../../../assets/auth-img.png'
import BackgroundWave from '@/components/backgroundWave'

const Login = () => {
  return (
    <Layout title="Login | CozQuiz" >
      <Container className='main-container'>
        <Box className="auth-container">
          <LoginForm />
          <Image height={350} width={650} src={authImg.src} alt="login" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Login