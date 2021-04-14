import React from "react";

import TodosList from "./TodosList";
import Header from "./Header";

// CLASS-BASED COMPONENT
class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Setup development environment",
				completed: true,
			},
			{
				id: 2,
				title: "Develop website and add content",
				completed: false,
			},
			{
				id: 3,
				title: "Deploy to live server",
				completed: false,
			},
		],
	};

	// component render is different from reactdom.render
	render() {
		//RETURNING JSX
		return (
			<div>
				<div>
					<Header />
					<TodosList todos={this.state.todos} />
				</div>
				{/* // CAN ONY RETURN 1 JSX ELEMENT = div */}
				{/* <ul>
					{this.state.todos.map((todo) => (
						// <li>{todo.title}</li>
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul> */}
			</div>
		);
	}
}
export default TodoContainer;
