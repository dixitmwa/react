import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const FullScreenLoader = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={300}>
            <CircularProgress />
        </Box>
    )
}

export default FullScreenLoader