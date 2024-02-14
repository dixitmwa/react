import React, { useRef, useState } from 'react'
import CustomButton from '@/common-components/CustomButton'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { DropzoneArea } from 'material-ui-dropzone'
import EditIcon from '../assets/edit-icon.png'
import DeleteIcon from '../assets/delete-icon.png'
import Image from 'next/image'

const UserProfile = () => {
    const [profileImg, setProfileImg] = useState(null)
    const fileInputRef = useRef(null)

    // const handleFileChange = (event: any) => {
    //     const file = event.target.files[0]
    //     setProfileImg(file)
    // }

    // const handleIconClick = () => {
    //     fileInputRef.current.click()
    // }

    return (
        <Box className="profile-outer-main-box-wrap">
            <Box className="profile-details">
                <Box className="profile-section">
                    <Box className="profile-image-section">
                        <Typography variant='subtitle1' >Profile Picture</Typography>
                        <Box className="profile-update">
                            <Avatar className='profile-image' />
                            <Image width={20} height={20} src={EditIcon.src} alt="edit" />
                            <Image width={20} height={20} src={DeleteIcon.src} alt="delete" />
                        </Box>
                    </Box>
                    <Box className="profile-details-section">
                        <Typography >User name: <span className='details-value'>admin</span></Typography>
                        <Typography >Email: <span className='details-value'>test@gmail.com</span></Typography>
                        <Typography >Age: <span className='details-value'>34</span></Typography>
                    </Box>
                </Box>
                <Box className="upload-result">
                    <Typography  >Upload Result</Typography>
                    <DropzoneArea
                        onChange={(files) => console.log('Files:', files)}
                        dropzoneText='Click or drag file to this area to upload'
                    />
                    <Box className="button-class">
                        <CustomButton className="upload-button" btnText="Upload" />
                        <Button size="medium">Cancel</Button>
                    </Box>
                </Box>
                <Box className="provider-code-wrap">
                    <Typography>Provider Code</Typography>
                    <Box className="provider-code">c7a5014f-aa23-4634-8e82-1f98fb337fb8</Box>
                </Box>
                <Box textAlign={"end"}>
                    <CustomButton className="save-profile" btnText="Save Profile" />
                </Box>
            </Box>
        </Box >

    )
}

export default UserProfile