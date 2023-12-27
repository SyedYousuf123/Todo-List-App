import "./Components/Style.css"
import React, { useState } from "react";
import Container from "./Components/Container";
import Box from "./Components/Box";

const App = () => {
	const [todos, setTodos] = useState([]);

	function RemoveTodo(id) {
		const newTodos = todos.filter((_, index) => index !== id);
		setTodos(newTodos);
	}

	function addTodoHandler(item) {
		setTodos([
			...todos,
			{
				item,
				time: new Date().toLocaleTimeString(),
			},
		]);
	}

	return (
		<div className="bg-gray-900 min-h-screen flex justify-center items-center">
		<div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold text-gray-800 mb-4">My To-Do List</h1>
			<Container handler={addTodoHandler} />
			{todos.length > 0 ? (
				<Box data={todos} RemoveHandler={RemoveTodo} />
			) : (
				<p className="text-gray-500 text-center mt-4">No tasks yet.</p>
			)}
		</div>
	</div>
	);
};

export default App;
