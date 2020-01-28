const zero = 0;

const showPage = pageId => {
  const pages = document.querySelectorAll('.page');
  const newPage = pageId.match(/[a-z]/g);

  pages.forEach(page => {
    page.style.display = 'none';
  });

  if (!newPage) {
    document.getElementById('main').style.display = 'block';
    return;
  }

  document.getElementById(newPage.join('')).style.display = 'block';
};

window.addEventListener('hashchange', () => {
  showPage(location.hash);
});

const createFormField = () => {
  const div = document.createElement('div');
  div.className = 'form-field'

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.className = 'form-input';

  const termInput = input.cloneNode();
  termInput.setAttribute('placeholder', 'Enter term');
  termInput.setAttribute('required', '');

  const defInput = input.cloneNode();
  defInput.setAttribute('placeholder', 'Enter definition');

  const button = document.createElement('button');
  button.className = 'button remove-button';
  button.textContent = 'Remove';
  button.addEventListener('click', removeSet);

  div.append(termInput, defInput, button);

  return div;
};

const removeSet = e => {
  e.target.parentNode.remove();
  writeLocalStorage();
}

const modifySet = e => {
  const formFields = document.querySelectorAll('#modify-form input');
  const setContent = e.target.parentNode.querySelector('.set-content').textContent.split('-');
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].value = setContent[i].trim();
  }

  document.querySelector('#modify-form').addEventListener('submit', () => {
    const formFields = document.querySelectorAll('#modify-form input');
    const setContent = e.target.parentNode.querySelector('.set-content');

    setContent.textContent = `${formFields[zero].value} - ${formFields[1].value}`;
    location.hash = '#';
    writeLocalStorage();
  }, {
    once: true
  });
};

const createSet = (id, term, definition) => {
  const div = document.createElement('div');
  div.className = 'set';
  div.id = id;

  const span = document.createElement('span');
  span.className = 'set-content'
  span.textContent = `${term} - ${definition}`;

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.className = 'set-checkbox';
  checkbox.addEventListener('click', checkboxHandler);

  const ref = document.createElement('a');
  ref.setAttribute('href', `#/modify/${id}`);
  ref.className = 'button edit-button';
  ref.textContent = 'Edit';
  ref.addEventListener('click', modifySet);

  const button = document.createElement('button');
  button.className = 'button remove-button';
  button.textContent = 'Remove';
  button.addEventListener('click', removeSet);

  div.append(span, checkbox, ref, button);

  return div;
}

const addSet = set => {
  const sets = document.querySelector('.sets');
  const flags = sets.querySelectorAll('.set-checkbox');
  let checkedItems = [];

  for (let i = 0; i < flags.length; i++) {
    if (flags[i].checked) {
      checkedItems.push(flags[i].parentElement);
      flags[i].parentElement.remove();
    }
  }

  sets.append(set);
  checkedItems.forEach(item => {
    sets.append(item);
  });
}

const checkboxHandler = e => {
  let flag = e.target;

  if (flag.checked) {
    flag.parentElement.style.backgroundColor = 'rgb(221, 224, 227)';
    document.querySelector('.sets').append(flag.parentElement);
  } else {
    flag.parentElement.style.backgroundColor = 'rgb(255, 255, 255)';
  }

  writeLocalStorage();
}

document.querySelectorAll('.set-checkbox').forEach(checkbox => {
  checkbox.addEventListener('click', checkboxHandler);
});

document.querySelector('.wrapper button.button').addEventListener('click', (e) => {
  const addForm = document.getElementById('add-form');
  const saveButton = addForm.querySelector('#add-form > button');

  addForm.append(createFormField());
  addForm.append(saveButton);
});

document.querySelectorAll('.remove-button').forEach(button => {
  button.addEventListener('click', removeSet);
});

document.querySelectorAll('.edit-button').forEach(edit => {
  edit.addEventListener('click', modifySet);
});

document.querySelector('#add-form').addEventListener('submit', (e) => {
  const sets = getSets();
  let id = sets.length ? sets.length + 1 : 1;
  const fields = e.target.parentNode.querySelectorAll('.form-input');
  const two = 2;

  for (let i = 0; i < fields.length; i += two) {
    const term = fields[i].value;
    const definition = fields[i + 1].value;
    const set = createSet(id, term, definition);
    addSet(set);

    id++;
  }

  writeLocalStorage();
  location.hash = '#';
});

const getSets = () => {
  const htmlSets = document.querySelectorAll('.set');
  let sets = [];

  htmlSets.forEach(set => {
    const content = set.querySelector('.set-content').textContent.split('-');

    sets.push({
      id: set.id,
      term: content[zero].trim(),
      definition: content[1].trim()
    });
  })

  return sets;
}

const writeLocalStorage = () => {
  localStorage.clear();
  const sets = getSets();
  const flags = document.querySelectorAll('.set-checkbox');

  for (let i = 0; i < sets.length; i++) {
    sets[i].checked = flags[i].checked;
    localStorage.setItem(sets[i].id, JSON.stringify(sets[i]));
  }
}

const loadLocalStorage = () => {
  if (!localStorage.length) {
    return;
  }

  document.querySelector('.sets').remove();
  const div = document.createElement('div');
  div.className = 'sets';

  document.getElementById('main').append(div);

  let checkedItems = [];

  for (let i = 1; i <= localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(i));

    if (obj.checked) {
      checkedItems.push(obj);
      continue;
    }
    const set = createSet(obj.id, obj.term, obj.definition);
    div.append(set);
  }

  checkedItems.forEach(obj => {
    const set = createSet(obj.id, obj.term, obj.definition);
    const checkbox = set.querySelector('.set-checkbox');
    checkbox.checked = true;
    checkbox.parentElement.style.backgroundColor = 'rgb(221, 224, 227)';
    div.append(set);
  })
};

showPage(location.hash);
loadLocalStorage();