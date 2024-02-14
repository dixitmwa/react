import { Box, Container, Typography } from "@mui/material";
import HeadReact from '../../assets/head-react.png'
import BlueCircle from '../../assets/blue circle.png'
import { useFilteredList } from "@/hooks/useFilteredList";
import HalfWave from '../../assets/half-wave.png'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { carouselData } from "@/constant/constant";
import Image from "next/image";


const WhyChooseUs = () => {

    const { filteredCategoriesList, shiftLeft, shiftRight } = useFilteredList(
        carouselData,
        3
    );

    return (
        <Box id="custom-test" className="why-choose-us-wrap" >
            <Container className="main-container">


                <Box className="choose-us-header">
                    <Image height={98} width={106} src={HeadReact.src} alt="Head react" />
                    <Typography variant="subtitle1" className="choose-us-title">Why <span className="choose">Choose</span> Us</Typography>
                    <Typography variant="subtitle1" className="choose-us-subtitle">Understand Your Brain and Boost Your Potential. <br /> Discover Your Cognitive Profile.</Typography>
                </Box>


                <Box className="carousel-btn">
                    <ArrowCircleLeftIcon onClick={shiftLeft} fontSize="medium" />
                    <ArrowCircleRightIcon onClick={shiftRight} fontSize="medium" />
                </Box>
                <Box className="carousel-warpper">
                    {filteredCategoriesList?.map((data: any) => {
                        const titleWords = data.title.split(' ');
                        const lastWord = titleWords.pop();
                        return (
                            <Container key={data.id} className="carousel-container">
                                <Box overflow={"hidden"}>
                                    <img className="carousel-wave" src={HalfWave.src} alt="" />
                                    <Box className="carousel-header">
                                        <Box>
                                            <Image height={50} width={50} src={BlueCircle.src} alt="" />
                                            <Typography className="carousel-counting" variant="h5">{data.id}</Typography>
                                        </Box>
                                        <Typography className="carousel-title" variant="subtitle2"> {titleWords.join(' ')}<span className="last-title"> {lastWord}</span></Typography>
                                    </Box>
                                    <Typography variant="body1" className="carousel-data">
                                        {data.content}
                                    </Typography>
                                </Box>
                            </Container>
                        )
                    })}

                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;