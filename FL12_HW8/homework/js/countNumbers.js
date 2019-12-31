const countNumbers = (str) => {
  let countObj = {};
  let subStr = str.split('').filter(letter => !isNaN(letter));

  subStr.forEach(num => {
    if (countObj[num] !== undefined) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  });

  return countObj;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));