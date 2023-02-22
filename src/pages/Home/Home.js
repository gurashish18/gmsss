/** @format */

import React from "react";
import About from "../../components/About/About";
import Life from "../../components/Life/Life";
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Slideshow from "../../components/Slideshow/Slideshow";
import ContactForm from "../../components/ContactForm/ContactForm";
import FromPrincipal from "../../components/FromPrincipal/FromPrincipal";

function Home() {
	return (
		<>
			<div className="home_container2">
				<Slideshow />
			</div>
			<div className="home_container">
				<About />
			</div>
			<div className="home_container">
				<FromPrincipal />
			</div>
			<div className="home_container">
				<Life />
			</div>
			<div className="home_container3">
				<ContactForm />
			</div>
		</>
	);
}

export default Home;
