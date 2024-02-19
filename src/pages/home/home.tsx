import { Box } from "@mui/material";
import ContactUs from "./contact-us";
import DesktopTest from "./desktop-test";
import TestCategories from "./test-categories";
import UnlockMind from "./unlock-mind";
import WhyChooseUs from "./why-choose-us";

const HomePage = () => {
	return (
		<Box id="home">
			<UnlockMind />
			<TestCategories />
			<WhyChooseUs />
			<DesktopTest />
			<ContactUs />
		</Box>
	);
};

export default HomePage;
