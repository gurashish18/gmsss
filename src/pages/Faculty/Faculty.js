/** @format */

import React from "react";
import "./Faculty.css";
import Team from "../../components/Team/Team";

function Faculty() {
	return (
		<>
			<header className="faculty_header">
				<div class="overlay">
					<h1>OUR TEAM</h1>
				</div>
			</header>
			<div className="faculty">
				<div className="faculty_container">
					<Team />
					{/* <Box sx={{ flexGrow: 1 }}>
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
					</Box> */}
				</div>
			</div>
		</>
	);
}

export default Faculty;
