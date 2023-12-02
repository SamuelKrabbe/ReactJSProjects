import PropTypes from "prop-types";

const ShowTasks = ({ task }) => {
	return (
		<div className="task">
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target={`#${task.id}`}
			>
				{task.title}
			</button>
			<div
				className="modal fade"
				id={task.id}
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="exampleModalLabel"
							>
								{task.title}
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<label
								htmlFor="description"
								className="col-sm-2 col-htmlForm-label"
							>
								Descrição
							</label>
							<p className="task-prop">{task.description}</p>
							<label
								htmlFor="title"
								className="col-sm-2 col-htmlForm-label"
							>
								Data
							</label>
							<p className="task-prop">{task.date}</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Fechar
							</button>
							<button type="button" className="btn btn-primary">
								Editar
							</button>
							<button className="delete-task">
								<ion-icon name="trash-bin-outline"></ion-icon>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ShowTasks.propTypes = {
	task: PropTypes.object.isRequired,
};

export default ShowTasks;
