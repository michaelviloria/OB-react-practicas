import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
	const nameRef = useRef();
	const descriptionRef = useRef();
	const levelRef = useRef(LEVELS.NORMAL);

	function addTask(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);
		add(newTask);
	}

	return (
		<form
			onSubmit={addTask}
			className="flex flex-col justify-center max-w-2xl mx-auto mb-4 align-middle"
		>
			<input
				type="text"
				ref={nameRef}
				id="inputName"
				placeholder="Name of the task ..."
				className="py-1 pl-2 pr-4 my-2 border-2 border-blue-400 rounded-lg outline-none"
				required
				autoFocus
			/>
			<input
				type="text"
				ref={descriptionRef}
				id="inputDescription"
				placeholder="Description of the task ..."
				className="py-1 pl-2 pr-4 my-2 border-2 border-blue-400 rounded-lg outline-none"
				required
			/>
			<div className="my-2">
				<label htmlFor="selectLevel" className="mr-3">
					Priority
				</label>
				<select
					id="selectLevel"
					ref={levelRef}
					defaultValue={LEVELS.NORMAL}
					className="p-1 bg-blue-300 rounded-md cursor-pointer"
				>
					<option value={LEVELS.NORMAL}>Normal</option>
					<option value={LEVELS.URGENT}>Urgent</option>
					<option value={LEVELS.BLOCKING}>Blocking</option>
				</select>
			</div>
			<button
				type="submit"
				className="w-full max-w-xs p-2 mx-auto my-2 font-semibold bg-blue-400 rounded-lg"
			>
				Add
			</button>
		</form>
	);
};

TaskForm.protoTypes = {
	add: PropTypes.func.isRequired,
};

export default TaskForm;
