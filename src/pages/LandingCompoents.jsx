import React from "react";
import HeroPage from "../landingpages/HeroPage";
import About from "../landingpages/About";
import Services from "../landingpages/Services";
import WhyUs from "../landingpages/WhyUs";
import Project from "../landingpages/Project";
import CalltoAction from "../landingpages/CalltoAction";
import Footer from "../landingpages/Footer";
import PagesLayout from "../layouts/PagesLayout";

const LandingCompoents = () => {
	return (
		<div>
			<PagesLayout>
				<HeroPage />
				<About />
				<Services />
				<WhyUs />
				<Project />
				<CalltoAction />
				{/* <Footer /> */}
			</PagesLayout>
		</div>
	);
};

export default LandingCompoents;
