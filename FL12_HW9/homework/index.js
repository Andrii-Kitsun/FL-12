const one = 1,
  two = 2,
  three = 3,
  five = 5,
  seven = 7,
  eight = 8,
  ten = 10,
  fourteen = 14,
  twentynine = 29,
  thirty = 30,
  thirtyone = 31,
  fortyeight = 48,
  fiftyeight = 58,
  year = 2019,
  yearInDays = 365;

// 1 function
const convert = (...args) => {
  let result = [];
  for (const elem of args) {
    typeof elem === 'string' ? result.push(parseInt(elem)) : result.push(elem + '');
  }

  return result;
};

console.log(convert('1', two, three, '4'));

// 2 function
const executeforEach = (arr, cb) => {
  for (const elem of arr) {
    cb(elem);
  }
}

executeforEach([one, two, three], function (el) {
  console.log(el * two)
});

// 3 function
const mapArray = (arr, cb) => {
  let result = [];
  executeforEach(arr, elem => {
    if (typeof elem === 'string') {
      elem = parseInt(elem);
    }

    result.push(cb(elem));
  });

  return result;
};

const mapRes = mapArray([two, '5', eight], function (el) {
  return el + three;
});
console.log(mapRes);

// 4 function
const filterArray = (arr, cb) => {
  let result = [];
  executeforEach(arr, elem => {
    if (cb(elem)) {
      result.push(elem);
    }
  });

  return result;
};

const filtered = filterArray([two, five, eight], function (el) {
  return el % two === 0
});
console.log(filtered);

// 5 function
const flipOver = str => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

console.log(flipOver('hey world'));

// 6 function
const makeListFromRange = arr => {
  let list = [];
  const from = arr[0];
  const to = arr[1];

  if (from < to) {
    for (let i = from; i <= to; i++) {
      list.push(i);
    }
  } else {
    for (let i = from; i >= to; i--) {
      list.push(i);
    }
  }

  return list;
};

console.log(makeListFromRange([two, seven]));

// 7 function
const actors = [{
    name: 'tommy',
    age: 36
  },
  {
    name: 'lee',
    age: 28
  }
];

const getArrayOfKeys = (arr, key) => {
  let result = [];
  executeforEach(arr, elem => {
    if (elem.hasOwnProperty(key)) {
      result.push(elem[key]);
    }
  });

  return result;
};

console.log(getArrayOfKeys(actors, 'name'));

// 8 function
const substitute = arr => {
  return mapArray(arr, elem => elem > thirty ? elem : '*');
};

console.log(substitute([fiftyeight, fourteen, fortyeight, two, thirtyone, twentynine]));

// 9 function
const date = new Date(year, 0, two);

const getPastDay = (date, days) => {
  const dublicate = new Date(date);
  dublicate.setDate(dublicate.getDate() - days);

  return dublicate.getDate();
};

console.log(getPastDay(date, one));
console.log(getPastDay(date, two));
console.log(getPastDay(date, yearInDays));

// 10 function
const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < ten ? '0' + hours : hours;
  minutes = minutes < ten ? '0' + minutes : minutes;

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));