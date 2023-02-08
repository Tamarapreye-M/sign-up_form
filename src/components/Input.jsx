import React from "react";

const Input = (props) => {
	const {
		name,
		type,
		handleFormState,
		className,
		maxLength,
		showPassword,
		handleShowPassword,
	} = props;

	const passwordIcon = showPassword ? (
		<span className="material-symbols-outlined" onClick={handleShowPassword}>
			visibility
		</span>
	) : (
		<span className="material-symbols-outlined" onClick={handleShowPassword}>
			visibility_off
		</span>
	);

	return (
		<>
			<input
				type={type}
				name={name}
				className={className}
				onChange={handleFormState}
				maxLength={maxLength}
			/>
			{name === "password" && passwordIcon}
		</>
	);
};

export default Input;
