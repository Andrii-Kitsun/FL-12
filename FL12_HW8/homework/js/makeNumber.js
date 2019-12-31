const makeNumber = str => str.split('').filter(letter => !isNaN(letter)).join('');

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));