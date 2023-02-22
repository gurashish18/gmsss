/** @format */

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoTime } from "react-icons/io5";

function Footer() {
	return (
		<>
			<div className="footer_container">
				<div className="footer_top">
					<div className="footer_logo">
						<img src={logo} alt="logo" width={120} />
					</div>
					<div className="footer_info">
						<div className="footer_info_item">
							<HiLocationMarker fontSize={25} />
							<p>
								GSSS POLICELINE, Kalka Chowk Bus Stop, NH-65, Palika Vihar,
								Ambala City, Haryana, India
							</p>
						</div>
						<div className="footer_info_item">
							<AiFillMail fontSize={25} />
							<p>ggssspoliceline12@gmail.com</p>
						</div>
						<div className="footer_info_item">
							<IoTime fontSize={25} />
							<p>8:00am to 2:30pm Mon-Sat</p>
						</div>
					</div>
				</div>
				<div className="footer_bottom">
					<small class="website-rights">GMSSS School © 2023</small>{" "}
					<small className="website-rights">
						Design and Developed by{" "}
						<a href="https://github.com/gurashish18" target={"_blank"}>
							Me{" "}
						</a>{" "}
					</small>
				</div>
			</div>
		</>
		// <div className="footer-container">
		// 	<div class="footer-links">
		// 		<div className="footer-link-wrapper">
		// 			<div class="footer-link-items">
		// 				<Link to="/">
		// 					<img src={logo} width={250} alt="logo" />
		// 				</Link>
		// 			</div>
		// 			<div class="footer-link-items">
		// 				<div className="footer-link-item">
		// 					<HiLocationMarker
		// 						style={{
		// 							fontSize: "3rem",
		// 							marginRight: "0.5rem",
		// 							color: "#c3073f",
		// 						}}
		// 					/>
		// 					<p>
		// 						GSSS POLICELINE, Kalka Chowk Bus Stop, NH-65, Palika Vihar,
		// 						Ambala City, Haryana, India
		// 					</p>
		// 				</div>
		// 				<div className="footer-link-item">
		// 					<AiFillMail
		// 						style={{
		// 							fontSize: "2.5rem",
		// 							marginRight: "0.5rem",
		// 							color: "#c3073f",
		// 						}}
		// 					/>
		// 					<p>ggssspoliceline12@gmail.com</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<section class="social-media">
		// 		<div class="social-media-wrap">
		// 			<small class="website-rights">GMSSS School © 2023</small>
		// 			<small className="website-rights">
		// 				Design and Developed by{" "}
		// 				<a href="https://github.com/gurashish18" target={"_blank"}>
		// 					Me
		// 				</a>
		// 			</small>
		// 		</div>
		// 	</section>
		// </div>
	);
}

export default Footer;
