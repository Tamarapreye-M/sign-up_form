import React from "react";

const Input = (props) => {
	let { name, type, handleFormState, className, maxLength } = props;
	return (
		<input
			type={type}
			name={name}
			className={className}
			onChange={handleFormState}
			maxLength={maxLength}
		/>
	);
};

export default Input;
