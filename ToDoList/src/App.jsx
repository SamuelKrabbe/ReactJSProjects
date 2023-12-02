import { useState } from "react";
import ShowTasks from "./components/ShowTasks";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: "_0",
			title: "lavar roupa",
			description: "lavar roupa de baixo",
			date: "2023-12-22",
			isCompleted: false,
		},
		{
			id: "_1",
			title: "limpar a louça",
			description: "limpar a louça da casa do junin",
			date: "2025-12-22",
			isCompleted: false,
		},
	]);

	const addTask = (title, description, date) => {
		setTasks((prevTasks) => [
			...prevTasks,
			{
				id: `_${tasks.length + 1}`,
				title: title,
				description: description,
				date: date,
				isCompleted: false,
			},
		]);
		setIsModalOpen(false);
	};

	if (Array.isArray(tasks)) {
		return (
			<>
				<div className="app">
					<h1>ToDo App</h1>
					<div id="ToDoList">
						{tasks.map((task) => (
							<ShowTasks key={task.id} task={task} />
						))}
					</div>

					<button
						type="button"
						className="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#todoForm"
						onClick={() => setIsModalOpen(true)}
					>
						Criar Tarefa
					</button>
					{isModalOpen && <TodoForm addTask={addTask} />}
				</div>
			</>
		);
	}
}

export default App;
