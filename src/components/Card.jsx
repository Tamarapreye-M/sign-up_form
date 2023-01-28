import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const inputArr = [
	{ name: "firstName", label: "First Name", type: "text" },
	{ name: "lastName", label: "Last Name", type: "text" },
	{ name: "email", label: "Email", type: "text" },
	{ name: "password", label: "Password", type: "password" },
];

const Card = () => {
	const [form, setForm] = useState({
		firstName: { value: "", status: false, error: false },
		lastName: { value: "", status: false, error: false },
		email: { value: "", status: false, error: false },
		password: { value: "", status: false, error: false },
	});

	const { firstName, lastName, email, password } = form;

	const handleEach = (id) => {
		// const handleFormInput = (ev) => {
		// 	console.log(ev.target.value);
		// 	let { value } = ev.target;
		// 	id && value.length === 1 ? setShowError(true) : setShowError(false);
		// };
		// return handleFormInput();
	};

	const handleFormState = (ev) => {
		let { value, name } = ev.target;

		setForm((prev) => {
			return {
				...prev,
				[name]: { ...[name], value: value },
			};
		});
		console.log(form);
	};

	const allInput = inputArr.map((each, idx) => (
		<Input
			key={idx}
			id={idx + 1}
			{...each}
			form={form}
			setForm={setForm}
			handleFormState={handleFormState}
			// handleEach={handleEach}
			onChange={() => handleEach(id)}
		/>
	));

	return (
		<div className="card">
			<h4>sign up</h4>
			<h1>Craete an Account.</h1>
			<p>Welcome to Onigs Where magic happens</p>
			<form className="form-container">
				{allInput}
				<Button content="sign in" />
			</form>
			<p>
				{firstName.value}, {lastName.value}, {email.value}, {password.value}
			</p>
		</div>
	);
};

export default Card;
