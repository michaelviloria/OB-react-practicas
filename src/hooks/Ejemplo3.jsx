/**
 * Ejemplo Hooks de:
 * - useState()
 * - useContext()
 */
import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre.
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
	// Inicializamos un estado vacio que va a rellenarse con los datos del padre.
	const state = useContext(miContexto);

	return (
		<div>
			<h1>El Token es: {state.token}</h1>
			{/* Pintamos el componente 2 */}
			<Componente2 />
		</div>
	);
};

const Componente2 = () => {
	const state = useContext(miContexto);

	return (
		<div>
			<h2>La sesion es: {state.session}</h2>
		</div>
	);
};

const MiComponenteConContexto = () => {
	const estadoInicial = {
		token: "1234567",
		session: 1,
	};

	// Creamos el estado de este componente
	const [sessionData, setSessionData] = useState(estadoInicial);

	function actualizarSesion() {
		setSessionData({
			token: "456897321",
			session: sessionData.session + 1,
		});
	}

	return (
		<miContexto.Provider value={sessionData}>
			{/* Todo lo que este aqui dentro, puede leer los datos de sessionData */}
			{/* Ademas, si se actualiza, los componentes de aqui tambien lo actualizan */}
			<h1>Ejemplo de useState() y de useContext()</h1>
			<Componente1 />
			<button onClick={actualizarSesion}>Actualizar Sesion</button>
		</miContexto.Provider>
	);
};

export default MiComponenteConContexto;
