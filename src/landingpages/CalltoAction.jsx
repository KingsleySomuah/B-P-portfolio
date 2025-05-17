import React from "react";
import cta from "../assets/cta.png";

const CalltoAction = () => {
	return (
		<section
			style={{
				backgroundImage: `url(${cta})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
        
			}}
		>
			<div className="flex flex-col justify-center items-center h-60 text-white space-y-5">
				<h1 className="text-2xl leading-relaxed text-center md:text-5xl font-bold">Lets Create something beautiful together</h1>
				<button className="text-[#30baff] border border-gray-400 rounded-full px-4 py-1">Contact me</button>
			</div>
		</section>
	);
};

export default CalltoAction;
