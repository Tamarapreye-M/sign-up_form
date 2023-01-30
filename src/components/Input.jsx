import React from "react";

const Input = ({
	name,
	label,
	type,
	handleEach,
	showError,
	id,
	handleFormState,
}) => {
	console.log(id);
	return (
		<div className="form-div">
			<label htmlFor="firstName">{label}</label>
			<br />
			<input
				type={type}
				name={name}
				// className={showError && "error-state"}
				onChange={handleFormState}
				// onChange={() => handleEach(id)}
			/>
			{/* {showError && <p className="error-state">Enter valid input</p>} */}
		</div>
	);
};

export default Input;
