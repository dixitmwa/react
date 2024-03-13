import Layout from '@/components/layout'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AllTestAvailable } from '@/constant/constant';
import Image from 'next/image';
import SendGreenIcon from '../../assets/right-green-arrow.png'

const TestCategories = () => {
    const router = useRouter()
    const { name }: any = router.query

    const testCategory = name?.split(" ")[0];

    const filteredTests = AllTestAvailable.filter((test) => test.category === testCategory)
    const handleAvailableTest = (title: string) => {
        router.push(`/available-test?name=${title}`)
    }

    return (
        <Layout title="Test Category | CozQuiz" footer>
            <Container className='main-container'>
                <Box display={"flex"} color={"#2D4F44"} style={{ width: "fit-content" }}>
                    <Typography style={{ fontWeight: "600", cursor: 'pointer' }}
                        onClick={() => router.push('/#test-category')}
                    >Test Categories</Typography>
                    <KeyboardArrowRightIcon />
                    <Typography style={{ color: "#584E4E" }}> {name}</Typography>
                </Box>
                <Box mt={5}>
                    <Typography className='available-test-title'>{name}</Typography>
                    <Typography mt={1} fontSize={"15px"}>The n-back working memory test with lifespan norms is currently available. Take our current working memory test and find out where you stand in relation to others your age and sex. Working memory shows a positive correlation with intelligence</Typography>
                </Box>
                <Typography className="color-title">{name}</Typography>
                <Box className="test-cat-container" pt={4}>
                    {
                        filteredTests.map((test) => {
                            return (
                                <Container className='available-test-container' key={test.id}>
                                    <Image height={240} width={465} src={test.img.src} alt="card-sort" />
                                    <Typography className="test-cat-title" onClick={() => handleAvailableTest(test.title)} >{test.title} <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                                </Container>
                            )
                        })
                    }
                </Box>
            </Container>
        </ Layout>
    )
}

export default TestCategories