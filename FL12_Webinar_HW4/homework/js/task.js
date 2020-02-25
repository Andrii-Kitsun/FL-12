const maxElement = arr => Math.max(...arr);

const copyArray = arr => Object.assign([], arr);

const addUniqueId = obj => ({
  id: Symbol(obj.name),
  ...obj
});

const regroupObject = obj => {
  const {name: firstName, details: {id, age, university}} = obj;

  return {
    university,
    user: {
      age,
      firstName,
      id
    }
  };
};

const findUniqueElements = arr => Array.from(new Set(arr));

const hideNumber = str => str.slice(str.length - 4).padStart(str.length, '*');

const error = () => {throw new Error('Missing property')};
const add = (a, b = error()) => a + b;

const getRepo = gitUrl => {
  return fetch(gitUrl)
    .then(response => response.json())
    .then(repoArr => repoArr.map(repo => repo.name).sort())
    .then(nameArr => {
      console.log(nameArr);
      return nameArr;
    })
    .catch(error => console.error(`ERROR: ${error.stack}`));
}

const getRepoAsync = async gitUrl => {
  try {
    const response = await fetch(gitUrl);
    const repoArr = await response.json();
    const nameArr = repoArr.map(repo => repo.name).sort();
    console.log(nameArr);
    
    return nameArr;
  }
  catch (error) {
    return console.error(`ERROR: ${error.stack}`);
  }
}
