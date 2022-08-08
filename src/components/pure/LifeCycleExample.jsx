/**
 * Ejemplo de Componente de tipo clase que dispone
 * de los metodos de ciclo de vida
 */

import React, { Component } from "react";

class LifeCycleExample extends Component {
	constructor(props) {
		super(props);
		console.log("contructor");

		/**
		 * ? CONSTRUCTOR:
		 * Cuando se instancia el componente
		 */
	}

	componentWillMount() {
		/**
		 * ? WillMount:
		 * Antes del montaje del componente
		 */
	}

	componentDidMount() {
		/**
		 * ? DidMount:
		 * Justo al acabar el montaje del componente, antes de renderizarlo
		 */
	}

	componentWillReceiveProps(nextProps) {
		/**
		 * ? WillReceiveProps:
		 * Si va a recibir nuevas props
		 */
	}

	shouldComponentUpdate(nextProps, nextState) {
		/**
		 * ? shouldComponentUpdate:
		 * Controla si el componente debe o no actualizarse
		 */
		// return true || false
	}

	componentWillUpdate(nextProps, nextState) {
		/**
		 * ? WillUpdate:
		 * Justo antes de actualizarse
		 */
	}

	componentDidUpdate(prevProps, prevState) {
		/**
		 * ? DidUpdate:
		 * Justo despues de actualizarse
		 */
	}

	componentWillUnmount() {
		/**
		 * ? WillUnmount:
		 * Justo antes de desaparecer
		 */
	}

	render() {
		return <div>LifeCycleExample</div>;
	}
}

export default LifeCycleExample;
