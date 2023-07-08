import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-red" : ""
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

function Navbar({ selectedPage, setSelectedPage }) {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const [isClosing, setIsClosing] = useState(false);

	const handleMenuClose = () => {
		setIsClosing(true);

		setTimeout(() => {
			setIsMenuToggled(!isMenuToggled);
			setIsClosing(false);
		}, 450);
	};

	return (
		<nav className={`z-40 w-full fixed top-0 py-6`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="font-playfair text-3xl font-bold text-white"> JD </h4>
				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					/* MOBILE NAV */

					!isMenuToggled && (
						<button
							className="rounded-full bg-red p-2 animate-rotate-and-fade-in"
							onClick={setIsMenuToggled}
						>
							<Bars3Icon className="h-6 w-6 text-white" />
						</button>
					)
				)}

				{/* MOBILE MENU POPUP */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div
						className={`fixed right-0 bottom-0 h-full bg-blue shadow-[-10px_-2px_13px_0px_rgba(86,127,180);] shadow-red-500 w-[300px] transition ${
							isMenuToggled ? "animate-fade-in" : ""
						} 
						${isClosing ? "animate-fade-out" : ""}`}
					>
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button onClick={handleMenuClose}>
								<XMarkIcon className="h-6 w-6 text-white" />
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Testimonials"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
