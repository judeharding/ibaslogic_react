import React, { Component } from "react";

class InputTodo extends Component {
	// input state
	state = {
		title: "",
	};

	onChange = (e) => {
		this.setState({
			title: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.title.trim()) {
			this.props.addTodoProps(this.state.title);
			this.setState({
				title: "",
			});
		} else {
			alert("Please write item");
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Add todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<button>Submit</button>
			</form>
		);
	}
}
export default InputTodo;

// //  // MULTIPLE INPUT FIELDS
// import React, { Component } from "react"

// class InputTodo extends Component {
//   state = {
//     title: "",
//   }
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     })
//   }
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Add todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />
//         <button>Submit</button>
//       </form>
//     )
//   }
// }
// export default InputTodo
