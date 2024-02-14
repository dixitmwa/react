import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { Box, Container, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '../assets/right-arrow.png'
import {
    Visibility, VisibilityOff
} from '@mui/icons-material'
import CustomButton from '@/common-components/CustomButton';

const initialRegisterDetails = {
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
}

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState(initialRegisterDetails)
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginForm = (e: any) => {
        const { value, name } = e.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)


    return (
        <Container className='form-container'>
            <Box className="form-details">
                <Typography variant="h3" display={"flex"} justifyContent={"center"}>
                    Signup
                </Typography>
                <Typography variant="body1" display={"flex"} justifyContent={"center"}>
                    Don’t have an account? <Link className='auth-link' href={"/auth/login"}> Login </Link>
                </Typography>

                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    }
                    placeholder="Enter Your Email" name="email" onChange={(e) => handleLoginForm(e)} />

                <OutlinedInput startAdornment={
                    <InputAdornment position="start">
                        <PersonIcon />
                    </InputAdornment>
                }
                    placeholder="Enter Username" name="username" onChange={(e) => handleLoginForm(e)} />

                <OutlinedInput type={showPassword ? 'text' : 'password'} startAdornment={
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
                    placeholder="Enter Your Password" name="password" onChange={(e) => handleLoginForm(e)} />

                <OutlinedInput type={showPassword ? 'text' : 'password'} startAdornment={
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
                    placeholder="Enter Confirm Password" name="confirmPassword" onChange={(e) => handleLoginForm(e)} />

                <CustomButton className="send-btn" btnText={"Sign Up"} endIcon={<Image height={18} width={18} src={SendIcon.src} alt={"send-icon"} />} />

            </Box>
        </Container>
    )
}

export default RegisterForm