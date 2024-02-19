import { Box } from '@mui/material'
import React from 'react'
import WaveImg from '../assets/wave.png'
import EllipseLeft from '../assets/ellipse-left.png'
import EllipseRight from '../assets/ellipse-right.png'
import Image from 'next/image'

const BackgroundWave = (props:any) => {
    const {margintop} = props
    return (
        <Box mt={margintop} className='background-wave'>
            <Box className="background-ellipse">
                <Image height={274} width={293} src={EllipseLeft.src} alt="ellipse-left" />
                <Image height={280} width={299} src={EllipseRight.src} alt="ellipse-right" />
            </Box>
            <Image height={100} width={100} layout='responsive' src={WaveImg.src} alt="wave" />
        </Box>
    )
}

export default BackgroundWave