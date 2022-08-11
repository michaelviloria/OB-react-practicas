import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/TaskForm";

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		"Example1",
		"Default description1",
		false,
		LEVELS.NORMAL
	);

	const defaultTask2 = new Task(
		"Example2",
		"Default description2",
		true,
		LEVELS.URGENT
	);

	const defaultTask3 = new Task(
		"Example3",
		"Default description3",
		false,
		LEVELS.BLOCKING
	);

	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);

	// Control del ciclo de vida del componente

	useEffect(() => {
		console.log("Task State has been modified");
		setLoading(false);
		return () => {
			console.log("TaskList Component is going to Unmount...");
		};
	}, [tasks]);

	// const changeCompleted = (id) => {
	// 	console.log(id);
	// };

	return (
		<div>
			<h1 className="my-4">Your Tasks:</h1>
			<table className="table-auto min-w-min">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Descripcion</th>
						<th>Level</th>
						<th>Completed</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return <TaskComponent key={index} task={task} />;
					})}
				</tbody>
			</table>
			<TaskForm />
		</div>
	);
};

export default TaskListComponent;
