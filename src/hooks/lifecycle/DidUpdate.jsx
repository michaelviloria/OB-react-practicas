/**
 * Ejemplo de uso del metodo DidUpdate en componente clase
 * y el hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
	componentDidUpdate() {
		/**
		 * Comportamiento cuando el componente recive nuevos props
		 * o cambio en su estado privado
		 */
	}

	render() {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}

export const DidUpdateHook = () => {
	useEffect(() => {
		/**
		 * Comportamiento cuando el componente recive nuevos props
		 * o cambio en su estado privado
		 */
	});

	return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
};
