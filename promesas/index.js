const esperarAlgo = (nombre) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Hola ${nombre}`);
		}, 1000);
	});
};

const decirHola = async () => {
	const mensaje = await esperarAlgo('Daniela');
	console.log(mensaje);
	throw new Error('Error generado');

	console.log('Mi nombre es Juan');
	console.log('Fin del programa');

	return {
		mensaje,
		id: 1,
		nombre: 'Daniela',
		apellido: 'Gutierrez',
	};
};

const mostrarInformacion = async () => {
	try {
		const data = await decirHola();

		await obtenerNotas(data.id);
	} catch (error) {
		console.log(error);
		console.log('Error, intente de nuevo');
	}
};

mostrarInformacion();

// esperarAlgo
// 	.then((mensaje) => {
// 		console.log(mensaje);
// 		console.log('Mi nombre es Juan');
// 		console.log('Fin del programa');
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		console.log('Ocurrio un error intenteleo de nuevo');
// 	});
