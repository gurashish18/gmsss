/** @format */

import React from "react";
import "./HeroSection.css";
import video from "../../assets/videos/video.mp4";
import { Button } from "../Button/Button";
import Slideshow from "../Slideshow/Slideshow";

function HeroSection() {
	return (
		<div className="hero-container">
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("hey")}
				>
					WATCH TRAILER <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;