/** @format */

import React from "react";
import "./Slideshow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img5 from "../../assets/img5.jpeg";
import school from "../../assets/school.jpeg";

function Slideshow() {
	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			showThumbs={false}
			interval={2000}
		>
			<div>
				<img src={img1} height={"700px"} alt="img1" />
			</div>
			<div>
				<img src={school} height={"700px"} alt="img2" />
			</div>
			<div>
				<img src={img3} height={"700px"} alt="img3" />
			</div>
			<div>
				<img src={img5} height={"700px"} alt="img4" />
			</div>
			<div>
				<img src={img2} height={"700px"} alt="img5" />
			</div>
		</Carousel>
	);
}

export default Slideshow;
