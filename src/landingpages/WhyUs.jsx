import React from "react";
import phone from "../assets/phone.png";
import why from "../javasciptfiles/why";

const WhyUs = () => {
	return (
		<section className="bg-[#09090b] p-[5%]">
			<div className="space-y-4">
				<h1 className="text-[#30baff] border border-gray-500 inline-block rounded-full px-4 py-1 uppercase font-semibold">
					services
				</h1>
				<p className="text-white text-3xl font-semibold">What Set Me Apart</p>
			</div>
			<div className="grid md:grid-cols-2 text-white mt-10 p-5">
				<div>
					{why.map((item, index) => {
						const Icon = item.icon;
						return (
							<div key={index} className="flex justify-center items-center gap-5 mb-10 ">
								<div className="text-4xl text-[#30baff]">
									<Icon />
								</div>
								<div className="space-y-3">
									<h1 className="text-3xl font-bold tracking-wide">{item.title}</h1>
									<p className="text-gray-400 text-base tracking-wide leading-relaxed">{item.description}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div>
					<img src={phone} alt="" />
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
