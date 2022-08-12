import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { Square, CheckSquare, Trash } from "react-bootstrap-icons";

const TaskComponent = ({ task, complete, remove }) => {
	useEffect(() => {
		console.log("Created Task");
		return () => {
			console.log(`Task: ${task.name} if going to Unmount`);
		};
	}, [task]);

	/**
	 * Function that returns a Badge
	 * depending on the level of the task
	 */
	function taskLevelBadge() {
		switch (task.level) {
			case "normal":
				return (
					<h6 className="p-1 text-sm font-semibold bg-blue-400 rounded-md text-gray-50">
						{task.level}
					</h6>
				);
			case "urgent":
				return (
					<h6 className="p-1 text-sm font-semibold bg-yellow-400 rounded-md text-gray-50">
						{task.level}
					</h6>
				);
			case "blocking":
				return (
					<h6 className="p-1 text-sm font-semibold bg-red-600 rounded-md text-gray-50">
						{task.level}
					</h6>
				);
			default:
				break;
		}
	}

	/**
	 * Function that returns icon depending on completion of the task
	 */
	function taskCompletedIcon() {
		if (task.completed) {
			return (
				<CheckSquare
					onClick={() => complete(task)}
					className="inline-block text-green-600 cursor-pointer"
				/>
			);
		} else {
			return (
				<Square
					onClick={() => complete(task)}
					className="inline-block text-gray-400 cursor-pointer"
				/>
			);
		}
	}

	return (
		<tr>
			<td className="p-2">{task.name}</td>
			<td className="p-2">{task.description}</td>
			<td className="p-2">
				{/* Execution of function to return badge element */}
				{taskLevelBadge()}
			</td>
			{/* TODO: Sustituir por iconos */}
			<td>
				{/* Execution of function to return icon depending on completion */}
				{taskCompletedIcon()}
				<Trash
					onClick={() => remove(task)}
					className="inline-block max-w-xs ml-2 text-orange-400 cursor-pointer"
				/>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default TaskComponent;
