import Image from "next/image";
import { Box, Typography } from "@mui/material";
import DesktopImg from '../../assets/desktop.png'
import FeedbackFeedImg from '../../assets/feedback-feed.png'
import CustomButton from "@/common-components/customButton";
import SendIcon from '../../assets/right-arrow.png'
import EllipseBall from '../../assets/Ellipse-ball.png'

const DesktopTest = () => {

    const handleBuyNow = () => {
    }
    return (
        <Box id="desktop-test" className="desktop-wrap" >
            <Box className="desktop-header">
                <Image height={94} width={93} src={DesktopImg.src} alt="desktop-icon" />
                <Typography variant="h4" className="typo-text">Desktop <span className="typo-color-text">Tests</span> </Typography>
            </Box>
            <Box className="desktop-feedback">
                <Image height={358} width={573} src={FeedbackFeedImg.src} alt="feedback" />
                <Box className="feedback-info">
                    <Typography variant="h4" className="heading-feedback">CogQuest</Typography>
                    <Typography variant="subtitle1" className="feedback-message">This is a highly flexible, stand-alone, desktop program for researchers and/or practitioners. We have created a general-purpose questionnaire construction tool.</Typography>
                    <CustomButton onBtnClick={handleBuyNow} className="buynow-btn" btnText={"Buy Now"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt="send" />} />
                    <Box className="ellipse-ball">
                        <Image height={97} width={97} src={EllipseBall.src} alt="ellipse-ball" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DesktopTest;