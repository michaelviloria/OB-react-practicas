import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
	const messageRef = useRef("");
	const nameRef = useRef("");

	function pressButton() {
		const text = messageRef.current.value;
		alert(`Text in Input: ${text}`);
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`);
	}

	function submitName(e) {
		e.preventDefault();
		update(nameRef.current.value);
	}

	return (
		<div>
			<p
				className="my-4 font-bold"
				onMouseOver={() => console.log("On Mouse Over")}
			>
				Hello, {name}
			</p>
			<button
				className="p-2 mx-4 font-semibold bg-blue-400 rounded-lg"
				onClick={() => console.log("Pressed Button 1")}
			>
				Button 1
			</button>
			<button
				className="p-2 mx-4 font-semibold bg-blue-400 rounded-lg"
				onClick={pressButton}
			>
				Button 2
			</button>
			<button
				className="p-2 mx-4 font-semibold bg-blue-400 rounded-lg"
				onClick={() => pressButtonParams("Hello")}
			>
				Button 3
			</button>
			<input
				className="py-1 pl-2 pr-4 border-2 border-blue-400 rounded-lg outline-none"
				onFocus={() => console.log("input focus")}
				onChange={(e) => console.log(e.target.value)}
				onCopy={(e) => console.log("Copied text from input", e)}
				placeholder="Send a text to your father"
				ref={messageRef}
				type="text"
			/>
			<button
				className="p-2 mx-4 font-semibold bg-blue-400 rounded-lg"
				onClick={() => send(messageRef.current.value)}
			>
				Send Message
			</button>
			<form
				className="flex flex-col justify-center p-3 mx-auto mt-4 w-min"
				onSubmit={submitName}
			>
				<input
					className="w-32 py-1 pl-2 pr-4 text-center border-2 border-blue-400 rounded-lg outline-none"
					type="text"
					placeholder="New Name"
					ref={nameRef}
				/>
				<button
					className="w-32 p-2 mt-2 font-semibold text-center bg-blue-400 rounded-lg"
					type="submit"
				>
					Update Name
				</button>
			</form>
		</div>
	);
};

export default Child;
