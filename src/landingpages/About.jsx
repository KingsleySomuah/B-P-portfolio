import React from "react";
import art from "../assets/art.png";
import aboutData from "../javasciptfiles/aboutdata";
const About = () => {
	return (
		<section className="p-[5%] bg-[#181d23]">
			<div className="space-y-2">
				<h1 className="text-[#30baff] border border-gray-500 inline-block rounded-full px-4 py-1 uppercase font-semibold">
					Who i am ?
				</h1>
				<p className="text-white text-2xl font-semibold">
					More Than Just Code- I Build with Purpose
				</p>
				<p className="text-gray-400 leading-relaxed tracking-wide">
					A passionate developer on a journey to create meaningful digital experiences. I don’t just write code; I craft solutions that connect people, solve real problems, and help ideas come to life.....
				</p>
				<button className="text-[#30baff] border border-gray-400  px-4 py-1 rounded-md">Read More</button>
			</div>
			<div className="grid md:grid-cols-3 gap-x-5  gap-y-5 mt-10 text-center">
				{aboutData.map((item, index) => (
					<div
						className="relative rounded-lg overflow-hidden shadow-lg h-100"
						key={index}
						style={{
							backgroundImage: `url(${item.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end ">
							<h2 className="text-2xl font-bold mb-2 border-b border-white w-fit text-gray-500">
								{item.title}
							</h2>
							<p className="text-sm text-left text-gray-400">{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
