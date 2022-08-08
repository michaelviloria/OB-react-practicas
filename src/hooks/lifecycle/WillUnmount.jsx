/**
 * Ejemplo de uso del metodo WillUnmount en componente clase
 * y el hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
	componentWillUnmount() {
		/**
		 * Comportamiento antes de que el componente desaparezca
		 */
	}

	render() {
		return (
			<div>
				<h1>WillUnmount</h1>
			</div>
		);
	}
}

export const WillUnmountHook = () => {
	useEffect(() => {
		// Aqui no ponemos nada
		return () => {
			/**
			 * Comportamiento antes de que el componente desaparezca
			 */
		};
	}, []);

	return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
};
