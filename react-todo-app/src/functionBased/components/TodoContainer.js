import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
//
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodoContainer = () => {
	//Hook
	// const [todos, setTodos] = useState([]);

	// if any todos stored in local, this will run the getInitalTodos
	const [todos, setTodos] = useState(getInitialTodos());

	const handleChange = (id) => {
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	const delTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	};

	const addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const setUpdate = (updatedTitle, id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.title = updatedTitle;
				}
				return todo;
			})
		);
	};

	//SETS todos in the local storage
	useEffect(() => {
		// storing todos items
		const temp = JSON.stringify(todos);
		localStorage.setItem("todos", temp);
	}, [todos]);

	// //updates local storage on the first render
	// // and after every state or prop changes
	// useEffect(() => {
	// 	console.log("test run");

	// 	// getting stored items
	// 	const temp = localStorage.getItem("todos");
	// 	const loadedTodos = JSON.parse(temp);

	// 	if (loadedTodos) {
	// 		setTodos(loadedTodos);
	// 	}
	// }, [setTodos]);

	// GETS any local storage todos
	function getInitialTodos() {
		// getting stored items
		const temp = localStorage.getItem("todos");
		const savedTodos = JSON.parse(temp);
		return savedTodos || [];
	}

	return (
		<div className="container">
			<div className="inner">
				<Header />
				<InputTodo addTodoProps={addTodoItem} />
				<TodosList
					todos={todos}
					handleChangeProps={handleChange}
					deleteTodoProps={delTodo}
					setUpdate={setUpdate}
				/>
			</div>
		</div>
	);
};

export default TodoContainer;
