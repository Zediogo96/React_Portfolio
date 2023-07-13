import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
	const lowerCasePage = page.toLowerCase();

	const handleClick = () => {
		setSelectedPage(lowerCasePage);
		setIsMenuToggled(false);
	};

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-red" : ""
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={handleClick}
		>
			{page}
		</AnchorLink>
	);
};

function Navbar({ selectedPage, setSelectedPage }) {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const [isClosing, setIsClosing] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) setHasScrolled(true);
		else {
			setHasScrolled(false);
			setIsMenuToggled(false);
		}
	};

	window.addEventListener("scroll", handleScroll);

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
				{isAboveSmallScreens && !hasScrolled && (
					<h4 className="font-playfair text-3xl font-bold text-white"> ZD </h4>
				)}
				{/* DESKTOP NAV */}
				{isAboveSmallScreens && !hasScrolled ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
					</div>
				) : (
					/* MOBILE NAV */

					!isMenuToggled && (
						<button
							className="rounded-full bg-red p-2 animate-rotate-and-fade-in absolute right-12 top-7"
							onClick={setIsMenuToggled}
						>
							<Bars3Icon className="h-6 w-6 text-white" />
						</button>
					)
				)}

				{/* MOBILE MENU POPUP */}
				{isMenuToggled && (
					<div
						className={`fixed right-0 bottom-0 h-full bg-blue opacity-[0.95] shadow-[-10px_-2px_13px_0px_rgba(86,127,180);] shadow-red-500 w-[300px] transition ${
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
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								setIsMenuToggled={setIsMenuToggled}
							/>

							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								setIsMenuToggled={setIsMenuToggled}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
