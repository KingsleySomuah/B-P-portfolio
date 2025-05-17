import React from "react";
import footer from "../javasciptfiles/footer";
import profile from "../assets/profile.jpeg";
import { BsTelephone, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
	return (
		<section className="bg-[#0b0d10] text-white">
			<div className="grid md:grid-cols-4 gap-5 p-10">
				<div className="space-y-2">
					<p className="font-semibold text-[#30baff] text-xl">Kingsley Somuah Asante</p>
					<p className="text-sm text-gray-300">kingsleysomuah123@gmail.com</p>
					<div className="flex gap-5 text-2xl text-gray-400">
						<LiaLinkedin  className="hover:text-[#30baff]"/>
						<BsWhatsapp className="hover:text-[#30baff]"/>
						<BsYoutube className="hover:text-[#30baff]"/>
					</div>
				</div>
				{footer.map((item, index) => {
					return (
						<div key={index}>
							<h1 className="text-2xl font-bold sm:mb-5 text-gray-300">{item.title}</h1>
							<div className="space-y-3 text-base text-gray-400 cursor-pointer md:mt-10">
								<div className="hover:text-[#30baff]">
									<p>{item.telephone}</p>
								</div>

								<div className="hover:text-[#30baff]">
									<p>{item.location}</p>
								</div>
								<div className="hover:text-[#30baff]">
									<p>{item.days}</p>
								</div>
								<p className="hover:text-[#30baff]">{item.service1}</p>
								<p className="hover:text-[#30baff]">{item.service2}</p>
								<p className="hover:text-[#30baff]">{item.service3}</p>
								<p className="hover:text-[#30baff]">{item.link1}</p>
								<p className="hover:text-[#30baff]">{item.link2}</p>
								<p className="hover:text-[#30baff]">{item.link3}</p>
								<p className="hover:text-[#30baff]">{item.link4}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Footer;
