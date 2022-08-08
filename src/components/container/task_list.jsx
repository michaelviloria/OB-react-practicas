import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
	const defaultTask = new Task(
		"Example",
		"Default description",
		false,
		LEVELS.NORMAL
	);

	const [tasks, setTasks] = useState(defaultTask);
	const [loading, setLoading] = useState(true);

	// Control del ciclo de vida del componente

	useEffect(() => {
		console.log("Task State has been modified");
		setLoading(false);
		return () => {
			console.log("TaskList Component is going to Unmount...");
		};
	}, [task]);

	// const changeCompleted = (id) => {
	// 	console.log(id);
	// };

	return (
		<div>
			<div>
				<h1>Your Tasks:</h1>
			</div>
			{/* TODO: Aplicar un for/map para renderizar una lista */}
			<TaskComponent task={defaultTask} />
		</div>
	);
};

export default TaskListComponent;
