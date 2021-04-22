//IMPORTS
import React from "react";
import ReactDOM from "react-dom";
// router uses HTML5 history API to keep the URL in sync with the view
import { BrowserRouter as Router } from "react-router-dom";

//component file
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css";

// RENDERING A FUNCTION-BASED COMPONENT in the index.html
ReactDOM.render(
	// a tool for highlighting potential problems in an app
	<React.StrictMode>
		<Router>
			<TodoContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
