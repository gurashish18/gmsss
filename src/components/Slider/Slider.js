/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img5 from "../../assets/img5.jpeg";
import school from "../../assets/school.jpeg";
import slide1 from "../../assets/slide1.jpeg";

function Slider() {
	return (
		<Carousel fade>
			<Carousel.Item
				style={{
					background:
						"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 90%)",
				}}
			>
				<img
					className="d-block w-100"
					src={img1}
					alt="First slide"
					style={{ opacity: "0.8" }}
				/>

				<Carousel.Caption>
					<h3 className="carousel-heading">GMSSS School</h3>
					<p className="carousel-subheading">Police Line, Ambala City</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				style={{
					background:
						"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 90%)",
				}}
			>
				<img
					className="d-block w-100"
					src={img2}
					alt="Second slide"
					style={{ opacity: "0.8" }}
				/>

				<Carousel.Caption>
					<h3 className="carousel-heading">GMSSS School</h3>
					<p className="carousel-subheading">Police Line, Ambala City</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				style={{
					background:
						"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 90%)",
				}}
			>
				<img
					className="d-block w-100"
					src={img5}
					alt="Third slide"
					style={{ opacity: "0.8" }}
				/>

				<Carousel.Caption>
					<h3 className="carousel-heading">GMSSS School</h3>
					<p className="carousel-subheading">Police Line, Ambala City</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				style={{
					background:
						"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 90%)",
				}}
			>
				<img
					className="d-block w-100"
					src={school}
					alt="Fourth slide"
					style={{ opacity: "0.8" }}
				/>

				<Carousel.Caption>
					<h3 className="carousel-heading">GMSSS School</h3>
					<p className="carousel-subheading">Police Line, Ambala City</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				style={{
					background:
						"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 1) 90%)",
				}}
			>
				<img
					className="d-block w-100"
					src={slide1}
					alt="Fifth slide"
					style={{ opacity: "0.8" }}
				/>

				<Carousel.Caption>
					<h3 className="carousel-heading">GMSSS School</h3>
					<p className="carousel-subheading">Police Line, Ambala City</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
