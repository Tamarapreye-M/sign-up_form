import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const inputArr = [
	{
		name: "firstName",
		label: "First Name",
		type: "text",
		id: ~~(Math.random() * 1000),
	},
	{
		name: "lastName",
		label: "Last Name",
		type: "text",
		id: ~~(Math.random() * 1000),
	},
	{ name: "email", label: "Email", type: "text", id: ~~(Math.random() * 1000) },
	{
		name: "password",
		label: "Password",
		type: "password",
		id: ~~(Math.random() * 1000),
	},
];

const Card = () => {
	const [form, setForm] = useState({
		firstName: { value: "", errorState: false },
		lastName: { value: "", errorState: false },
		email: { value: "", errorState: false },
		password: { value: "", errorState: false },
	});

	const { firstName, lastName, email, password } = form;

	const handleFormState = (ev) => {
		let { value, name, focus } = ev.target;

		setForm((prev) => {
			return {
				...prev,
				[name]: { ...[name], value: value },
			};
		});
		if (focus && value.length < 2) {
			// set the form to toggle the status
			setForm((prev) => {
				return {
					...prev,
					[name]: { ...[name], errorState: true, value: value },
				};
			});
			console.log("error");
		} else {
			setForm((prev) => {
				return {
					...prev,
					[name]: { ...[name], errorState: false, value: value },
				};
			});
		}
		console.log(form);
	};

	const allInput = inputArr.map((each, idx) => (
		<div className="form-div" key={idx}>
			<label htmlFor={each.name}>{each.label}</label>
			<br />
			<Input
				{...each}
				form={form}
				setForm={setForm}
				handleFormState={handleFormState}
				className={form[each.name].errorState ? "error-state" : "success"}
			/>
			{form[each.name].errorState && (
				<p className="error-state">Enter valid {each.label.toLowerCase()}</p>
			)}
		</div>
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
