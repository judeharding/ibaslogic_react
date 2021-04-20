import React from "react";
import { v4 as uuidv4 } from "uuid";

// import "../../src/index";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

// CLASS-BASED COMPONENT
class TodoContainer extends React.Component {
	state = {
		todos: [],
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

	// accept input
	addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	};

	// update todo doubleclick
	setUpdate = (updatedTitle, id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.title = updatedTitle;
				}
				return todo;
			}),
		});
	};

	// grabbing data with the FETCH API
	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
	// 		.then((response) => response.json())
	// 		.then((data) => this.setState({ todos: data }));
	// }

	// component did update method
	// componentDidUpdate(prevProps, prevState) {
	// 	below prevents an infinite loop
	//   if(prevState.todos !== this.state.todos) {
	//    //logic here
	// 	}
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos !== this.state.todos) {
			const temp = JSON.stringify(this.state.todos);
			localStorage.setItem("todos", temp);
		}
	}

	componentDidMount() {
		const temp = localStorage.getItem("todos");
		const loadedTodos = JSON.parse(temp);
		if (loadedTodos) {
			this.setState({
				todos: loadedTodos,
			});
		}
	}

	// component render is different from reactdom.render
	render() {
		return (
			<div className="container">
				<div className="inner">
					<Header />

					<InputTodo addTodoProps={this.addTodoItem} />

					<TodosList
						todos={this.state.todos}
						handleChangeProps={this.handleChange}
						deleteTodoProps={this.delTodo}
						setUpdate={this.setUpdate}
					/>
				</div>
			</div>
		);
	}
}
export default TodoContainer;
