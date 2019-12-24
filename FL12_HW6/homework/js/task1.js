try {
	const a = parseFloat(prompt('Input first coefficient:'));
	if (isNaN(a) || a === 0) {
		throw new Error('a: Invalid input data');
	}
	console.log('a =', a);

	const b = parseFloat(prompt('Input second coefficient:'));
	if (isNaN(b)) {
		throw new Error('b: Invalid input data');
	}
	console.log('b =', b);

	const c = parseFloat(prompt('Input third coefficient:'));
	if (isNaN(c)) {
		throw new Error('c: Invalid input data');
	}
	console.log('c =', c);

	console.log(`Your quadratic equation is: ${a}x^2 + ${b}x + ${c} = 0`);

	const two = 2;
	const four = 4;
	const D = b * b - four * a * c;
	console.log('Discriminant: D =', D);

	if (D > 0) {
		const x1 = (-b + Math.sqrt(D)) / (two * a);
		const x2 = (-b - Math.sqrt(D)) / (two * a);

		console.log('x1 =', Math.round(x1));
		console.log('x2 =', Math.round(x2));
	} else if (D === 0) {
		const x = -b / (two * a);
		console.log('x: ', x);
	} else {
		console.log('No solution (Discriminant < 0)');
	}
} catch (error) {
	console.error(error);
}