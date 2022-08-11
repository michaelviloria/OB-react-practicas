import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { Square, CheckSquare, Trash } from "react-bootstrap-icons";

const TaskComponent = ({ task }) => {
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
					<h6 className="p-1 bg-blue-400 rounded-md text-gray-50 font-semibold">
						{task.level}
					</h6>
				);
			case "urgent":
				return (
					<h6 className="p-1 bg-yellow-400 rounded-md text-gray-50 font-semibold">
						{task.level}
					</h6>
				);
			case "blocking":
				return (
					<h6 className="p-1 bg-red-600 rounded-md text-gray-50 font-semibold">
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
			return <CheckSquare className="text-green-600" />;
		} else {
			return <Square className="text-gray-400" />;
		}
	}

	return (
		<tr>
			<td>{task.name}</td>
			<td>{task.description}</td>
			<td>
				{/* Execution of function to return badge element */}
				{taskLevelBadge()}
			</td>
			{/* TODO: Sustituir por iconos */}
			<td className="flex justify-center">
				{/* Execution of function to return icon depending on completion */}
				{taskCompletedIcon()}
				<Trash className="text-orange-400" />
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
