import React from "react"
import { Box, Typography } from "@mui/material"
import Image from "next/image"

const ProfileHeader = (props: any) => {
    const { currentNav } = props
    return (
        <Box className="profile-header">
            <Image height={42} width={42} src={currentNav?.img?.src} alt="user-profile" />
            <Typography variant='h4'>{currentNav?.title}</Typography>
        </Box>
    )
}

export default ProfileHeader