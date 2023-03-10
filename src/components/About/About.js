/** @format */

import React from "react";
import "./About.css";
import school from "../../assets/school.jpeg";

function About() {
	return (
		<>
			<div className="about_container">
				<div className="about-content">
					<h1>About</h1>
					<h4>GMSSS School, Police Line</h4>

					<blockquote>
						<p>
							St.Paul’s School, is an independent boarding school for boys in
							Darjeeling, ranked the Best Boarding School in West Bengal, The
							Best School in North Bengal and the 3rd Best School in West
							Bengal. It founded on the 1st of May, 1823, by an Anglo-India
							leader named John William Ricketts. The school has been a second
							home to generations of Paulites from various parts of India and
							the world, and has been consistently ranked amongst the top boys’
							residential schools in India.
						</p>
					</blockquote>
				</div>
				<div className="about-image">
					<img src={school} alt="principal" />
				</div>
			</div>
		</>
	);
}

export default About;
