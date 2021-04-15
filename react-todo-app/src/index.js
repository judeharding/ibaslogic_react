//IMPORTS
import React from "react";
import ReactDOM from "react-dom";

//component file
import TodoContainer from "./components/TodoContainer";

import "./App.css";

// RENDERING A CLASS-BASED COMPONENT
ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>,
	document.getElementById("root")
);
