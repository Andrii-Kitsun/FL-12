function addOne(x) {
  return x + 1;
}

const pipe = (...args) => {
  let number = args[0];

  for (let i = 1; i < args.length; i++) {
    number = args[i](number); 
  }

  return number;
}


console.log(pipe(1, addOne)); 
console.log(pipe(1, addOne, addOne)); 