import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../landingpages/Footer";

const PagesLayout = (props) => {
	return (
		<div>
			<Navbar />
			{props.children}
            <Footer />
		</div>
	);
};

export default PagesLayout;
