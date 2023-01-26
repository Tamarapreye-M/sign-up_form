import React from "react";
import Input from "./Input";
const inputArr = [
	{ name: "firstName", label: "First Name", type: "text" },
	{ name: "lastName", label: "Last Name", type: "text" },
	{ name: "email", label: "Email", type: "text" },
	{ name: "password", label: "Password", type: "password" },
];
const allInput = inputArr.map((each, idx) => <Input key={idx} {...each} />);
const Card = () => {
	return (
		<div className="card">
			<h4>sign up</h4>
			<h1>Craete an Account.</h1>
			<p>Welcome to Onigs Where magic happens</p>
			<form className="form-container">{allInput}</form>
		</div>
	);
};

export default Card;
