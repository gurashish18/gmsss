/** @format */

import React, { useState } from "react";
import "./ContactForm.css";
import { Typewriter } from "react-simple-typewriter";

function ContactForm() {
	const [formStatus, setFormStatus] = useState("Send");
	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus("Submitting...");

		const { name, email, message } = e.target.elements;
		let conFom = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		console.log(conFom);
	};
	return (
		<>
			<div className="contact_form_container">
				<div className="contact_form">
					<form onSubmit={onSubmit}>
						<div className="contact_form_field">
							<label className="form-label" htmlFor="name">
								Name
							</label>
							<input className="form-control" type="text" id="name" required />
						</div>
						<div className="contact_form_field">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								className="form-control"
								type="email"
								id="email"
								required
							/>
						</div>
						<div className="contact_form_field">
							<label className="form-label" htmlFor="message">
								Message
							</label>
							<textarea
								rows={3}
								className="form-control"
								id="message"
								required
							/>
						</div>
						<button className="contact_submit_btn" type="submit">
							{formStatus}
						</button>
					</form>
				</div>
				<div className="contact_form_heading">
					<Typewriter
						words={["Have a question?", "Have any suggestion?"]}
						loop={false}
						typeSpeed={120}
						deleteSpeed={70}
						delaySpeed={1000}
					/>
					<h4>Ask out.</h4>
				</div>
			</div>
		</>
	);
}

export default ContactForm;
