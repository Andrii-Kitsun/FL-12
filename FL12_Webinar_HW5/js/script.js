const errorMessage = error => {
  document.querySelector(".error").classList.toggle("hidden");
  document.querySelector(".spinner").classList.toggle("hidden");
  console.error(error);
};

const createCard = user => {
  const { id, name, username, email, address, phone, website, company } = user;

  const { street, suite, city, zipcode, geo } = address;
  const { name: companyName, catchPhrase: phrase, bs } = company;

  const card = document.createElement("div");
  card.className = "card";
  card.id = id;
  card.innerHTML = `
    <div class="card__info">
      <a href="./posts.html#${id}" target="_blank" class="card__info-name">${name}</a>
      <span class="card__info-username">${username}</span>
    </div>

    <h4 class="card__title">Company:</h6>
    <div class="card__company">
      <span class="card__company-name">${companyName}</span>
      <span class="card__company-phrase">${phrase}</span>
      <span class="card__company-bs">${bs}</span>
    </div>

    <h4 class="card__title">Address:</h6>
    <div class="card__address">
      <span class="card__address-address">${street}, ${suite},</span>
      <span class="card__address-city">${city}, ${zipcode}</span>
      <span class="card__address-geo">(${geo.lat}; ${geo.lng})</span>
    </div>

    <h4 class="card__title">Contacts:</h4>
    <div class="card__contacts">
      <span class="card__contacts-email">${email}</span>
      <span class="card__contacts-phone">${phone}</span>
      <span class="card__contacts-website">${website}</span>
    </div>

    <div class="card__button">
      <button class="card__button-edit">Edit</button>
      <button class="card__button-delete">Delete</button>
    </div>
  `;

  return card;
};

const showUsers = usersArr => {
  const main = document.querySelector(".main__content");

  usersArr.forEach(user => {
    const card = createCard(user);
    main.append(card);
  });
};

const getUsers = () => {
  document.querySelector(".spinner").classList.toggle("hidden");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      showUsers(users);
      addListeners();
      document.querySelector(".spinner").classList.toggle("hidden");
    })
    .catch(error => errorMessage(error));
};

const addListeners = () => {
  document.querySelectorAll(".card__button").forEach(button => {
    button.children[0].addEventListener("click", editUser);
    button.children[1].addEventListener("click", deleteUser);
  });
};

const deleteUser = e => {
  const id = +e.target.parentElement.parentElement.id;
  const card = e.target.parentElement.parentElement;
  document.querySelector(".spinner").classList.toggle("hidden");

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  }).then(() => {
    card.remove();
    document.querySelector(".spinner").classList.toggle("hidden");
  })
  .catch(error => console.error(error));
};

const editUser = e => {
  const card = e.target.parentElement.parentElement;
  const form = document.forms.editForm;
  form.classList.toggle("hidden");

  form.id.value = card.id;
  form.name.value = card.querySelector(".card__info-name").textContent;
  form.username.value = card.querySelector(".card__info-username").textContent;
  form.company.value = card.querySelector(".card__company-name").textContent;
  form.address.value = card.querySelector(".card__address-address").textContent;
  form.email.value = card.querySelector(".card__contacts-email").textContent;
  form.phone.value = card.querySelector(".card__contacts-phone").textContent;
  form.website.value = card.querySelector(
    ".card__contacts-website"
  ).textContent;
};

document.querySelector(".form__close").addEventListener("click", e => {
  e.preventDefault();
  document.forms.editForm.classList.toggle("hidden");
});

document.querySelector(".form__save").addEventListener("click", e => {
  e.preventDefault();
  const form = document.forms.editForm;
  const id = form.id.value;
  const card = document.getElementById(id);
  document.querySelector(".spinner").classList.toggle("hidden");

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: form.name.value,
      username: form.username.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      website: form.website.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(() => {
    document.querySelector(".spinner").classList.toggle("hidden");
    document.forms.editForm.classList.toggle("hidden");
  })
  .catch(error => console.error(error));

  card.querySelector(".card__info-name").textContent = form.name.value;
  card.querySelector(".card__info-username").textContent = form.username.value;
  card.querySelector(".card__company-name").textContent = form.company.value;
  card.querySelector(".card__address-address").textContent = form.address.value;
  card.querySelector(".card__contacts-email").textContent = form.email.value;
  card.querySelector(".card__contacts-phone").textContent = form.phone.value;
  card.querySelector(".card__contacts-website").textContent =
    form.website.value;
});

document.addEventListener("DOMContentLoaded", getUsers);
