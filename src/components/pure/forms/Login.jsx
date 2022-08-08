/**
 * Componente que va a contener un formulario
 * para autentificacion de usuarios
 */

import React, { useState } from "react";

const Login = () => {
	const initialCredentials = [
		{
			user: "",
			password: "",
		},
	];
	const [creadentials, setCreadentials] = useState(initialCredentials);

	return <div></div>;
};

export default Login;
