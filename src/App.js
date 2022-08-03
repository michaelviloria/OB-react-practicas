import "./App.css";
// import TaskListComponent from "./components/container/task_list";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Componente de listado de tareas */}
				{/* <TaskListComponent /> */}

				{/* Ejemplos de usos de Hooks */}
				{/* <Ejemplo1 /> */}
				{/* <Ejemplo2 /> */}
				{/* <MiComponenteConContexto /> */}
				<Ejemplo4 nombre={"Michael"}>
					{/* Todo lo que hay aqui dentro, es tratado como props.children */}
					<h3>Este contenido viene de los props.children</h3>
				</Ejemplo4>
			</header>
		</div>
	);
}

export default App;
