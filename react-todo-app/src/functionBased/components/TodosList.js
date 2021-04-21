import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
	return (
		<ul>
			{props.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					// these are things the user sees in the todolist
					handleChangeProps={props.handleChangeProps}
					deleteTodoProps={props.deleteTodoProps}
					setUpdate={props.setUpdate}
				/>
			))}
		</ul>
	);
};
export default TodosList;
