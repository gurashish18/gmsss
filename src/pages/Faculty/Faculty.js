/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import "./Faculty.css";
import { faculties } from "./FacultyData.js";

function Faculty() {
	return (
		<>
			<div className="faculty">
				<div className="faculty_container">
					<Box sx={{ flexGrow: 1 }}>
						<Grid
							container
							spacing={{ xs: 3, sm: 3, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}
						>
							{faculties.map((faculty) => (
								<Grid
									item
									xs={4}
									sm={4}
									md={4}
									key={faculty.id}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<FacultyCard faculty={faculty} />
								</Grid>
							))}
						</Grid>
					</Box>
				</div>
			</div>
		</>
	);
}

export default Faculty;
