import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
	const {
		form,
		handleFormState,
		setShowPassword,
		showPassword,
		handleShowPassword,
	} = props;
	const inputArr = [
		{
			name: "firstName",
			label: "First Name",
			type: "text",
			id: ~~(Math.random() * 1000),
			maxLength: "30",
		},
		{
			name: "lastName",
			label: "Last Name",
			type: "text",
			id: ~~(Math.random() * 1000),
			maxLength: "30",
		},
		{
			name: "email",
			label: "Email",
			type: "text",
			id: ~~(Math.random() * 1000),
			maxLength: "30",
		},
		{
			name: "password",
			label: "Password",
			type: showPassword ? "password" : "text",
			id: ~~(Math.random() * 1000),
			maxLength: "12",
		},
	];

	let disabledBtn = Object.values(form).some(
		(each) => each.errorState || !each.value.trim()
	);

	const allInput = inputArr.map((each, idx) => (
		<div className="form-div" key={idx}>
			<label htmlFor={each.name}>{each.label}</label>
			<br />
			<div className="input-div">
				<Input
					{...each}
					handleFormState={handleFormState}
					className={form[each.name].errorState ? "error-state" : "success"}
					maxLength={each.maxLength}
					handleShowPassword={handleShowPassword}
					showPassword={showPassword}
				/>
				{form[each.name].errorState ? (
					<p className="error-state">{`Enter valid ${each.label.toLowerCase()}`}</p>
				) : (
					<p className="error-state bar">
						{form[each.name].status && `maximum characters reached`}
					</p>
				)}
			</div>
		</div>
	));
	return (
		<form action="" className="form-container">
			{allInput}

			<Button content="sign in" disabled={disabledBtn} />
		</form>
	);
};

export default Form;
