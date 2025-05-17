import React from "react";
import servicedata from "../javasciptfiles/servicedata";
import skillsdata from "../javasciptfiles/skillsdata";

const Services = () => {
	return (
		<section className="bg-[#0b0d10] p-[5%]">
			<div className="space-y-4">
				<h1 className="text-[#30baff] border border-gray-500 inline-block rounded-full px-4 py-1 uppercase font-semibold">
					services
				</h1>
				<p className="text-white text-3xl font-semibold">Explore my services</p>
			</div>

			<div className="grid md:grid-cols-3 gap-x-5 gap-y-5 pt-5">
				{servicedata.map((item, index) => {
					const Icon = item.icon;
					return (
						<div
							key={index}
							className="border border-gray-500 hover:border-[#30baff] p-[10%] text-white text-center rounded-md"
						>
							<div className="text-5xl mb-4 text-[#30baff] flex justify-center items-center">
								<Icon />
							</div>
							<div className="pt-3 space-y-2">
								<h1 className="text-xl font-bold">{item.title}</h1>
								<p className="text-sm text-gray-400 leading-relaxed tracking-wide">{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="mt-[5%] space-y-3">
				<h1 className="text-[#30baff] border border-gray-500 inline-block rounded-full px-4 py-1 uppercase font-semibold">
					skills
				</h1>
				<p className="text-white text-3xl font-semibold">My technical Skills</p>

				<div className="grid md:grid-cols-3 gap-x-4  gap-4 pt-5">
					{skillsdata.map((item, index) => {
						const Icon = item.icon;
						return (
							<div
								key={index}
								className="border border-gray-500 hover:border-[#30baff] p-[10%] text-white text-center rounded-md"
							>
								<div className="text-5xl mb-4 text-[#30baff] flex justify-center items-center">
									<Icon />
								</div>
								<div>{item.text}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
