import React, { useState } from "react";
import Form from "./Form";

const Card = () => {
	// form state
	const [form, setForm] = useState({
		firstName: { value: "", errorState: false, status: false },
		lastName: { value: "", errorState: false, status: false },
		email: { value: "", errorState: false, status: false },
		password: { value: "", errorState: false, status: false },
	});

	// destructuring the form
	const { firstName, lastName, email, password } = form;

	// event handlers

	// handle the form state and handle form validation
	const handleFormState = (ev) => {
		const { value, name, maxLength, focus } = ev.target;

		// set the form to toggle the status
		let newPrev = {
			value: value,
			errorState: true,
			status: value.length >= +maxLength ? true : false,
		};
		// conditions for form inputs validation
		switch (true) {
			case name === "firstName" && value.trim().length < 2:
			case name === "lastName" && value.trim().length < 2:
				setForm((prev) => {
					return {
						...prev,
						[name]: newPrev,
					};
				});
				break;
			case name === "email" &&
				!/^[a-z]{1,}\w*@([ge]?mail|yahoo)\.com$/gi.test(value):
				setForm((prev) => {
					return {
						...prev,
						[name]: newPrev,
					};
				});
				break;
			case name === "password" && !/^\S{6,12}$/gi.test(value):
				setForm((prev) => {
					return {
						...prev,
						[name]: newPrev,
					};
				});
				break;
			// deafault for all inputs
			default:
				setForm((prev) => {
					return {
						...prev,
						[name]: { ...newPrev, errorState: false },
					};
				});
				break;
		}
	};
	console.log(form);

	// show password state
	const [showPassword, setShowPassword] = useState(true);

	// handle show or hide password
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="card">
			<h4>sign up</h4>
			<h1>Craete an Account.</h1>
			<p>Welcome to Onigs Where magic happens</p>
			<Form
				handleFormState={handleFormState}
				form={form}
				showPassword={showPassword}
				setShowPassword={setShowPassword}
				handleShowPassword={handleShowPassword}
			/>
			{/* <p>
				{firstName.value}, {lastName.value}, {email.value}, {password.value}
			</p> */}
		</div>
	);
};

export default Card;
