import React from "react";
import "./App.css";
import Input from "./components/Input";

const App = () => {
	return (
		<div>
			<h4>sign up</h4>
			<h1>Craete an Account.</h1>
			<p>Welcome to Onigs Where magic happens</p>
			<div className="form-div">
				<Input />
			</div>
		</div>
	);
};

export default App;
