import React from "react";

const Input = (props) => {
	let { name, type, handleFormState } = props;
	return (
		<input
			type={type}
			name={name}
			className={showError && "error-state"}
			onChange={handleFormState}
		/>
	);
};

export default Input;
