import PropTypes from "prop-types";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title || !description || !date) {
			alert("Task must be filled out");
			return;
		}

		console.log(title);
		console.log(description);
		console.log(date);

		addTask(title, description, date);
		setTitle("");
		setDescription("");
		setDate("");
	};

	return (
		<div
			className="modal fade"
			id="todoForm"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							Criar Nova Tarefa
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<form onSubmit={handleSubmit}>
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control"
									id="floatingInput"
									placeholder="name@example.com"
									onChange={(e) => setTitle(e.target.value)}
								/>
								<label htmlFor="floatingInput">Título</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control"
									id="floatingInput"
									placeholder="name@example.com"
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
								<label htmlFor="floatingInput">Descrição</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="date"
									className="form-control"
									id="floatingInput"
									placeholder="name@example.com"
									onChange={(e) => setDate(e.target.value)}
								/>
								<label htmlFor="floatingInput">Data</label>
							</div>
							<button
								type="submit"
								className="btn btn-primary"
								data-bs-dismiss="modal"
							>
								Continuar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

TodoForm.propTypes = {
	addTask: PropTypes.func.isRequired,
};

export default TodoForm;
