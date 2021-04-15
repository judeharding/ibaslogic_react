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

	// checkbox on todo
	handleChange = (id) => {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.map((todo) => {
					if (todo.id === id) {
						return {
							...todo,
							completed: !todo.completed,
						};
					}
					return todo;
				}),
			};
		});
	};

	// delete on todo
	delTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter((todo) => {
					return todo.id !== id;
				}),
			],
		});
	};

	// component render is different from reactdom.render
	render() {
		//RETURNING JSX
		return (
			<div>
				<div>
					<Header />
					{/* <TodosList todos={this.state.todos} /> */}
					<TodosList
						todos={this.state.todos}
						handleChangeProps={this.handleChange}
						deleteTodoProps={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}
export default TodoContainer;
