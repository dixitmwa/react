import { Box, Typography, Container } from "@mui/material";
import TestCategoryImg from '../../assets/test-category-read.png'
import CustomButton from "@/common-components/CustomButton";
import SendIcon from '../../assets/right-arrow.png'
import SendGreenIcon from '../../assets/right-green-arrow.png'
import BrainAi from '../../assets/brain-ai.png'
import Planning from '../../assets/planning.png'
import SpeedProcessing from '../../assets/speed-processing.png'
import QuizImg from '../../assets/quiz.png'
import CardImg from '../../assets/card-sort.png'
import Nback from '../../assets/Nback.png'
import TrailMarketing from '../../assets/trail-marketing.png'
import SyllogismsImg from '../../assets/syllogisms-tes.png'
import StroopImg from '../../assets/stroop-effect.png'
import TOIimg from '../../assets/TOL-test.png'
import DotWave from '../../assets/dots-wave.png'
import Image from "next/image";

const TestCategories = () => {

    const handleReadMore = () => {
        console.log("read more");
    }

    return (
        <Box className="test-category-wrap" pt={5} id="test-category">
            <Box className="test-category">
                <Image width={98} height={119} src={TestCategoryImg.src} alt="test-cat-image" />
                <Typography className="text-cat-title"> Test <span className="category">Categories</span> </Typography>
                <Typography className="text-cat-subtitle">Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile.</Typography>
                <Box className="container-wrap">
                    <Container className="single-container">
                        <Image height={128} width={128} src={BrainAi.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Memory With AI</Typography>
                        <CustomButton onBtnClick={() => handleReadMore()} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container>
                    <Container className="single-container">
                        <Image height={128} width={128} src={Planning.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Executive function and Planning</Typography>
                        <CustomButton onBtnClick={() => handleReadMore()} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container>
                    <Container className="single-container">
                        <Image height={128} width={128} src={SpeedProcessing.src} alt="brain-ai" />
                        <Typography className="container-title" variant="h5">Processing Speed</Typography>
                        <CustomButton onBtnClick={() => handleReadMore()} className="test-cat-btn" btnText={"Read More"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    </Container>
                </Box>
            </Box>

            <Box id="available-test" className="all-available-test" position={"absolute"}>
                <Box className="ab-bg-dot-wrap">
			 {/* eslint-disable @next/next/no-img-element */}
                    <img src={DotWave.src} alt="dot" />
                </Box>
                <Box className="image-section">
                    <Image height={119} width={98} src={QuizImg.src} alt="quiz" />
                    <Typography className="available-test-title" variant="h5">
                        All
                        <span className="custom-style-title"> Available Test</span>
                    </Typography>
                </Box>
                <Box>
                    <Box className="all-nav-bar">
                        <Typography className="active-nav-title">All</Typography>
                        <Typography className="nav-title">Memory</Typography>
                        <Typography className="nav-title">Executive Function</Typography>
                        <Typography className="nav-title">Processing Speed</Typography>
                    </Box>
                    <Box className="available-container" pt={4}>
                        <Container>
                            <Image height={240} width={465} src={CardImg.src} alt="card-sort" />
                            <Typography className="available-title"> card sort test <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                        <Container>
                            <Image height={240} width={465} src={Nback.src} alt="card-sort" />
                            <Typography className="available-title"> Nback Test <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                        <Container>
                            <Image height={240} width={465} src={TrailMarketing.src} alt="card-sort" />
                            <Typography className="available-title"> trail making test <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                        <Container>
                            <Image height={240} width={465} src={SyllogismsImg.src} alt="card-sort" />
                            <Typography className="available-title"> Syllogisms Test <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                        <Container>
                            <Image height={240} width={465} src={StroopImg.src} alt="card-sort" />
                            <Typography className="available-title"> Stroop Effect <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                        <Container>
                            <Image height={240} width={465} src={TOIimg.src} alt="card-sort" />
                            <Typography className="available-title"> Tower of London test <span><Image height={19} width={19} src={SendGreenIcon.src} alt="next" /></span></Typography>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default TestCategories;