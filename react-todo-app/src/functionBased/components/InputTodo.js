// importing the useState for hooks
import React, { useState } from "react";

import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
	// HOOK
	const [inputText, setInputText] = useState({
		// will use the spread operator to access data below
		// fName: "",
		// lastName: "",
		title: "",
	});

	// onChange handles input from the user
	const onChange = (e) => {
		setInputText({
			// spread operator allows for multiple entries
			// into the useState object
			...inputText,
			[e.target.name]: e.target.value,
		});
	};

	// prevState can be used for check boxes and radio buttons
	// const onChange = (e) => {
	// 	setInputText((prevState) => {
	// 		return {
	// 			...prevState,
	// 			[e.target.name]: e.target.value,
	// 		};
	// 	});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText.title.trim()) {
			props.addTodoProps(inputText.title);
			setInputText({
				title: "",
			});
		} else {
			alert("Please write item");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form-container">
				<input
					type="text"
					className="input-text"
					placeholder="Add todo..."
					value={inputText.title}
					name="title"
					onChange={onChange}
				/>

				{/* MULTIPLE FIELDS  */}
				{/* <input
					type="text"
					className="input-text"
					placeholder="Add first name"
					value={inputText.fName}
					name="fName"
					onChange={onChange}
				/>
				<input
					type="text"
					className="input-text"
					placeholder="Add last name"
					value={inputText.lastName}
					name="lastName"
					onChange={onChange}
				/> */}

				<button className="input-submit">
					<FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
				</button>
			</form>
			{/* <h2>{inputText.fName}</h2>
			<h2>{inputText.lastName}</h2> */}
		</>
	);
};

export default InputTodo;
