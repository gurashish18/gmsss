/** @format */

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function FacultyCard({ faculty }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="300"
					image={faculty.imageurl}
					alt="image"
				/>
				<CardContent>
					<h4
						style={{
							textAlign: "center",
							fontSize: "1.5rem",
							fontWeight: "300",
						}}
					>
						{faculty.name}
					</h4>
					<p
						style={{
							textAlign: "center",
							color: "#c3073f",
							fontSize: "1rem",
							fontWeight: "600",
						}}
					>
						{faculty.designation}
					</p>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default FacultyCard;
