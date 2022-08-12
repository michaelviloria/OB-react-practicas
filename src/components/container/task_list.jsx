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

	function completeTask(task) {
		console.log("Complete this task: ", task);
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask[index].completed = !tempTask[index].completed;
		// We update the state of the component whit the new list of tasks and it will update the
		// iteration of the tasks in order to show task updated
		setTasks(tempTask);
	}

	function deleteTask(task) {
		console.log("Delete this task: ", task);
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask[index].completed = !tempTask[index].completed;
		tempTask.splice(index, 1);
		setTasks(tempTask);
	}

	function addTask(task) {
		console.log("Delete this task: ", task);
		// const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask.push(task);
		setTasks(tempTask);
	}

	return (
		<div className="p-5 bg-gray-100 border-2 border-gray-300 rounded-md max-w-max">
			<h1 className="my-4">Your Tasks:</h1>
			<table className="w-full table-fixed">
				<thead>
					<tr>
						<th className="px-1 pb-1 border-b-2">Nombre</th>
						<th className="px-1 pb-1 border-b-2">Descripcion</th>
						<th className="px-1 pb-1 border-b-2">Level</th>
						<th className="px-1 pb-1 border-b-2">Completed</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return (
							<TaskComponent
								key={index}
								task={task}
								complete={completeTask}
								remove={deleteTask}
							/>
						);
					})}
				</tbody>
			</table>
			<TaskForm add={addTask} />
		</div>
	);
};

export default TaskListComponent;
