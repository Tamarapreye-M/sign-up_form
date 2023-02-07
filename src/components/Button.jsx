import React from "react";

const Button = ({ content, disabled }) => {
	return (
		<button
			type="submit"
			disabled={disabled}
			className={disabled ? "disabled" : "able"}
		>
			{content}
		</button>
	);
};

export default Button;
