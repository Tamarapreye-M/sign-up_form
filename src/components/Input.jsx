import React from "react";

const Input = ({ name, label, type }) => {
	return (
		<div className="form-div">
			<label htmlFor="firstName">{label}</label>
			<br />
			<input type={type} />
		</div>
	);
};

export default Input;
