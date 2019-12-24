try {
    const a = parseInt(prompt('Input first side of triangle:'));
    if (isNaN(a)) {
        throw new Error('a: Input value should be ONLY number');
    } else if (a === 0) {
        throw new Error('a: A triangle must have a positive definite length');
    }
    console.log('a =', a);

    const b = parseInt(prompt('Input second side of triangle:'));
    if (isNaN(b)) {
        throw new Error('b: Input value should be ONLY number');
    } else if (b === 0) {
        throw new Error('b: A triangle must have a positive definite length');
    }
    console.log('b =', b);

    const c = parseInt(prompt('Input third side of triangle:'));
    if (isNaN(c)) {
        throw new Error('c: Input value should be ONLY number');
    } else if (c === 0) {
        throw new Error('c: A triangle must have a positive definite length');
    }
    console.log('c =', c);

    if (!(a + b > c && a + c > b && b + c > a)) {
        throw 'Triangle doesn\'t exist';
    }

    if (a === b && b === c && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }

} catch (error) {
    console.error(error);
}