/** @format */

import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Life.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";

function Life() {
	const itemData = [
		{
			img: img1,
			title: "Bed",
		},
		{
			img: img2,
			title: "Books",
		},
		{
			img: img3,
			title: "Sink",
		},
		{
			img: img4,
			title: "Kitchen",
		},

		{
			img: img5,
			title: "Blinds",
		},
		{
			img: img6,
			title: "Chairs",
		},
		{
			img: img7,
			title: "Laptop",
		},
		{
			img: img8,
			title: "Doors",
		},
		{
			img: img9,
			title: "Coffee",
		},
		{
			img: img10,
			title: "Storage",
		},
		{
			img: img11,
			title: "Candle",
		},
		{
			img: img12,
			title: "Coffee table",
		},
	];
	return (
		<>
			<div className="life-container">
				<div className="life-heading">
					<h1>Life At</h1>
					<h4>GMSSS School, Police Line</h4>
				</div>
				<div className="life-content">
					<Box>
						<ImageList variant="masonry" cols={2} gap={8}>
							{itemData.map((item) => (
								<ImageListItem key={item.img}>
									<img
										src={`${item.img}?w=350&fit=crop&auto=format`}
										srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
										alt={item.title}
										loading="lazy"
									/>
								</ImageListItem>
							))}
						</ImageList>
					</Box>
				</div>
			</div>
		</>
	);
}

export default Life;
