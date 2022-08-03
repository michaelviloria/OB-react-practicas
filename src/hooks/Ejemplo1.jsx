/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un Componente de tipo funcion y acceder a su estado
 * privado a traves de un Hook y ademas poder modificarlo.
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
	// Valor inicial para un contador
	const valorInicial = 0;

	// Valor inicial para una persona
	const personaInicial = {
		nombre: "Michael",
		email: "michaelviloria.g@gmail.com",
	};

	/**
	 * Queremos que el "valorIncial" y "personaInicial" sean
	 * parte del estado del componente, para asi poder
	 * gestionar su cambio y que este se vea reflejado
	 * en la vista del componente.
	 *
	 * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
	 */

	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/**
	 * Funcion para actualizar el estado privado que contiene el contador
	 */
	function incrementarContador() {
		// funcionParaCambiar(nuevoValor) ----> Es como funciona
		setContador(contador + 1);
	}

	/**
	 * Funcion para actualizar el estado de persona en el componente.
	 */
	function actualizarPersona() {
		setPersona({
			nombre: "Steven",
			email: "stevengarcia@gmail.com",
		});
	}

	return (
		<div>
			<h1>Ejemplo de useState()</h1>
			<h2>Contador: {contador}</h2>
			<h2>Datos de la persona: </h2>
			<h3>Nombre: {persona.nombre}</h3>
			<h4>Email: {persona.email}</h4>
			{/* Bloque de botones para actualizar el estado */}
			<button onClick={incrementarContador}>Incrementar contador</button>
			<button onClick={actualizarPersona}>Actualizar persona</button>
		</div>
	);
};

export default Ejemplo1;
