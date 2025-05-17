import React, { useState } from "react";
import Navitems from "../javasciptfiles/navitems";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="p-2">
			<nav className="hidden md:flex justify-center items-center space-x-10">
				{Navitems.map((item, index) => (
					<ul key={index}>
						<Link to={item.path}>
							<li>{item.name}</li>
						</Link>
					</ul>
				))}
			</nav>
			<div className="md:hidden">
				{isOpen ? (
					<X size={24} onClick={() => setIsOpen(false)} />
				) : (
					<Menu size={24} onClick={() => setIsOpen(true)} />
				)}
			</div>

			{isOpen && (
				<nav
					className={`md:hidden mt-4 space-y-4 ml-2 transition-all duration-500 ease-in-out transform origin-top ${
						isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
					}`}
					style={{ transformOrigin: "top" }}
				>
					{Navitems.map((item, index) => (
						<ul key={index}>
							<Link to={item.path}>
								<li>{item.name}</li>
							</Link>
						</ul>
					))}
				</nav>
			)}
		</section>
	);
};

export default Navbar;
