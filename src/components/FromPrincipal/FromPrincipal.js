/** @format */

import React from "react";
import "./FromPrincipal.css";
import principal from "../../assets/principal.jpeg";

function FromPrincipal() {
	return (
		<>
			<div className="principal_container">
				<div className="principal-content">
					{/* <h1>
						From <span style={{ color: "#c3073f" }}>Principal</span>
					</h1> */}
					<blockquote class="q-card q-card-color-1">
						<p>
							I am very fortunate to work with such dedicated, innovative and
							caring staff members, parents and students. I find each day an
							adventure filled with new experiences, learning for all, and a
							chance to constantly widen our horizons. It always gives me a
							great pleasure to see the sea of smiling faces of children and I
							must admit that on many days it is the students who make my day a
							little brighter.
						</p>
					</blockquote>
				</div>
				<div className="principal-image">
					<img src={principal} alt="principal" />
				</div>
			</div>
		</>
	);
}

export default FromPrincipal;
