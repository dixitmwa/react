import Layout from '@/components/layout'
import { Box,  Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileHeader from './profileHeader'
import UserProfileImg from '../../assets/user-profile.png'
import ProfileFormImg from '../../assets/profile-form.png'
import YourTestImg from '../../assets/your-test.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import UserProfile from '@/components/userProfile';
import ProfileForm from '@/components/profileForm';
import YourTest from '@/components/yourTest';
import Image from 'next/image'
import { useRouter } from 'next/router'
import FullScreenLoader from '@/common-components/fullScreenLoader'

const ProfileDetails = () => {
    const router = useRouter()
    const { tab } = router.query;

    const navMenu = [
        {
            id: 1,
            title: "User Profile",
            img: UserProfileImg,
            url: "user-profile"
        },
        {
            id: 2,
            title: "Profile Form",
            img: ProfileFormImg,
            url: "profile-form"
        },
        {
            id: 3,
            title: "Your Tests",
            img: YourTestImg,
            url: "your-tests"
        }
    ]

    const [currentNav, setCurrentNav] = useState<any>({})

    useEffect(() => {
        const matchedNav = navMenu.find(nav => nav.url === tab);
        if (matchedNav) {
            setCurrentNav(matchedNav);
        }
        // eslint-disable-next-line
    }, [tab])

    const handleNavClick = (item: any) => {
        router.push(`/profile?tab=${item.url}`)
        setCurrentNav(item)
    }

    const renderComponent = () => {
        switch (currentNav?.title) {
            case 'User Profile':
                return <UserProfile />;
            case 'Profile Form':
                return <ProfileForm />;
            case 'Your Tests':
                return <YourTest />;
            default:
                return null;
        }
    };


    return (
        <Layout title="Profile | Next.js App" footer>
            <Container className='main-container'>
                {currentNav?.id ? <>
                    <ProfileHeader currentNav={currentNav} />
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={2.5} lg={3} xl={2.3}>
                                <Box className="nav-menu">
                                    {navMenu.map((item) => {
                                        const isActive: any = item?.url === tab
                                        return (
                                            <Box className="nav-item" color={isActive && "#69A6D1"} key={item.id} onClick={() => handleNavClick(item)}>
                                                <Image height={36} width={36} src={item.img.src} alt={item.title} />
                                                <Typography>{item.title}</Typography>
                                                <KeyboardArrowRightIcon />
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Grid>
                            <Grid item xs={9.5} lg={9} xl={9.7}>
                                {renderComponent()}
                            </Grid>
                        </Grid>
                    </Box>
                </> : <FullScreenLoader />}
            </Container>
        </Layout>
    )
}

export default ProfileDetails