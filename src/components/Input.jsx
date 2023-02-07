import React, { useState } from "react";

const Input = (props) => {
	const { name, type, handleFormState, className, maxLength } = props;

	const [showPassword, setShowPassword] = useState(false);
	const passwordIcon = (
		<span class="material-symbols-outlined">visibility</span>
	);

	return (
		<div>
			<input
				type={type}
				name={name}
				className={className}
				onChange={handleFormState}
				maxLength={maxLength}
			/>
			{type === "password" && passwordIcon}
		</div>
	);
};

export default Input;
