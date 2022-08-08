/**
 * Ejemplo de uso del metodo DidMount en componente clase
 * y el hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
	componentDidMount() {
		/**
		 * Comportamiento antes de que el componente
		 * sea añadido al DOM (renderice)
		 */
	}

	render() {
		return (
			<div>
				<h1>DidMount</h1>
			</div>
		);
	}
}

export const DidMountHook = () => {
	useEffect(() => {
		/**
		 * Comportamiento antes de que el componente
		 * sea añadido al DOM (renderice)
		 */
	}, []);

	return (
		<div>
			<h1>DidMount</h1>
		</div>
	);
};
