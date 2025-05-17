import React from "react";
import projectdata from "../javasciptfiles/projectdata";

const Project = () => {
	return (
		<section className="bg-[#0b0d10] text-white p-[5%]">
			<div className="space-y-4">
				<h1 className="text-[#30baff] border border-gray-500 inline-block rounded-full px-4 py-1 uppercase font-semibold">
					Project
				</h1>
				<h2 className="text-white text-2xl md:text-4xl font-bold">Completed Projects</h2>
			</div>
			<div className="grid md:grid-cols-3 gap-y-4 gap-x-4 mt-[5%]">
				{projectdata.map((item, index) => (
					<div key={index}>
						<img src={item.image} alt="" />

						<div className="space-y-4 p-3 rounded-md shadow-lg shadow-black">
							<p className="text-gray-400 tracking-wide text-xl mt-4">{item.topic}</p>
							<p className="text-gray-400 tracking-wide text-sm mt-4">{item.title}</p>
							<button className=" text-[#30baff] border border-gray-500 inline-block rounded-md px-4 py-1 uppercase font-semibold">{item.button}</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Project;
