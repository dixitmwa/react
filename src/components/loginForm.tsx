import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '@/common-components/CustomButton'
import { Box, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import SendIcon from '../assets/right-arrow.png'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material'

const initialLoginDetails = {
    email: "",
    password: "",
    remember: false
}

const LoginForm = () => {
    const router = useRouter()
    const [loginData, setLoginData] = useState(initialLoginDetails)
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginForm = (e: any) => {
        const { value, name, checked } = e.target
        if (name === "remember") {
            setLoginData({ ...loginData, [name]: checked })
            return
        }
        setLoginData({ ...loginData, [name]: value })
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleFormSubmit = () => {
        if (loginData?.email?.length > 0) {
            localStorage.setItem("email", loginData.email)
            router.push('/profile?tab=user-profile')
        }
    }

    return (
        <Container className='form-container'>
            <Box className="form-details">
                <Typography variant="h3" display={"flex"} justifyContent={"center"}>
                    Login
                </Typography>
                <Typography variant="body1" display={"flex"} justifyContent={"center"}>
                    Don’t have an account? <Link className='auth-link' href={"/auth/register"}> Sign up </Link>
                </Typography>

                <OutlinedInput
                    className='auth-input'
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    }
                    placeholder="Enter Your Email" name="email" onChange={(e) => handleLoginForm(e)} />

                <OutlinedInput
                    className='auth-input'
                    startAdornment={
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    type={showPassword ? 'text' : 'password'} placeholder="Enter Your Password" name="password" onChange={(e) => handleLoginForm(e)} />

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <FormControlLabel control={<Checkbox onChange={handleLoginForm} name='remember' />} label="Remember me" />
                    <Link style={{
                        color: "#4181E0"
                    }} href={"/forget-password"}>Forget password?</Link>
                </Box>
                <CustomButton className="send-btn" onBtnClick={handleFormSubmit} btnText={"Login"} endIcon={<Image height={18} width={18} src={SendIcon.src} alt={"send-icon"} />} />
            </Box>
        </Container>
    )
}

export default LoginForm