/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
	const [click, setClick] = useState(false);
	// eslint-disable-next-line
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={logo} style={{ height: "60px" }} />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? (
							<FaTimes className="fas fa-times" />
						) : (
							<FaBars className="fas fa-bars" />
						)}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/faculty"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Faculty
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/gallery"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Gallery
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/facility"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Facility
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact us
							</Link>
						</li>

						{/* <li>
							<Link
								to="/sign-up"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li> */}
					</ul>
					{/* {button && <button buttonStyle="btn--outline">SIGN UP</button>} */}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
