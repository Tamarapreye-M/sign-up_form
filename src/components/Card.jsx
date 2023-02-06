import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const inputArr = [
	{
		name: "firstName",
		label: "First Name",
		type: "text",
		id: ~~(Math.random() * 1000),
		maxLength: "30",
	},
	{
		name: "lastName",
		label: "Last Name",
		type: "text",
		id: ~~(Math.random() * 1000),
		maxLength: "30",
	},
	{
		name: "email",
		label: "Email",
		type: "text",
		id: ~~(Math.random() * 1000),
		maxLength: "30",
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		id: ~~(Math.random() * 1000),
		maxLength: "12",
	},
];

const Card = () => {
	const [form, setForm] = useState({
		firstName: { value: "", errorState: false, status: false },
		lastName: { value: "", errorState: false, status: false },
		email: { value: "", errorState: false, status: false },
		password: { value: "", errorState: false, status: false },
	});

	const { firstName, lastName, email, password } = form;

	const handleFormState = (ev) => {
		let { value, name, maxLength, focus } = ev.target;

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
			// deafault for all
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
				maxLength={each.maxLength}
			/>
			{form[each.name].errorState ? (
				<p className="error-state">{`Enter valid ${each.label.toLowerCase()}`}</p>
			) : (
				<p className="error-state bar">
					{form[each.name].status && `maximum characters reached`}
				</p>
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
