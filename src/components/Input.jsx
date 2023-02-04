import React from "react";

const Input = (props) => {
	let { name, type, handleFormState, className } = props;
	return (
		<input
			type={type}
			name={name}
			className={className}
			onChange={handleFormState}
		/>
	);
};

export default Input;
