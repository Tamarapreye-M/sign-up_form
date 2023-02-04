import React from "react";

const Input = (props) => {
	let { name, label, type, showError, handleFormState, formStates } = props;
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
