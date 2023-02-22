/** @format */

import React from "react";
import "./Team.css";
import { faculties } from "../../pages/Faculty/FacultyData.js";

function Team() {
	return (
		<>
			<div class="container">
				<div class="row">
					{faculties.map((faculty) => (
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="our-team">
								<div class="pic">
									<img src={faculty.imageurl} />
								</div>
								<div class="team-content">
									<h3 class="title">{faculty.name}</h3>
									<span class="post">{faculty.designation}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Team;
