import "./App.css";
import TaskListComponent from "./components/container/task_list";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Componente de listado de tareas */}
				<TaskListComponent />
			</header>
		</div>
	);
}

export default App;
