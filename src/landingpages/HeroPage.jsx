import React from "react";
import background from "../assets/background.png";
const HeroPage = () => {
	return (
		<section
			style={{
				backgroundImage: `url(${background})`,
				height: "100vh",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="text-white flex flex-col justify-center items-center h-screen md:max-w-4xl m-auto space-y-4">
				<h1 className="uppercase text-[#30baff] font-semibold border border-gray-500 rounded-full px-4 py-1 leading-relaxed tracking-wide">
					Hi Welcome to Kings World !
				</h1>
				<h1 className="text-2xl text-center md:text-5xl font-bold">I'm Kingsley Somuah Asante</h1>
				<p className="text-sm text-center text-gray-400">
					This is my personal space where skills meet purpose, and passion meets results.I share
					projects I’ve worked on, insights I’ve gathered, and the journey I’m on—combining
					creativity, tech, and a heart for impact.
				</p>
				<button className="bg-[#30baff] text-black rounded-full px-5 py-2 font-semibold">
					Download CV
				</button>
			</div>
		</section>
	);
};

export default HeroPage;
