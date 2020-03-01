const createComment = comment => {
  const card = document.createElement("div");
  card.className = "comment";
  card.id = comment.id;

  card.innerHTML = `
    <p class="comment__title">${comment.name}</p>
    <span class="comment__email">${comment.email}</span>
    <p class="comment__body">${comment.body}</p>
  `;

  return card;
};

const appendComments = (commentBlock, id) => {
  const postCard = document.querySelector(`[id='${id}'] .posts__comments`);

  commentBlock.forEach(comment => {
    const card = createComment(comment);
    postCard.append(card);
  });
};

const showComments = posts => {
  posts.forEach(post => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then(response => response.json())
      .then(comment => {
        appendComments(comment, post.id);
      })
      .catch(error => console.error(error));
  });
};

const createPost = post => {
  const card = document.createElement("div");
  card.className = "posts";
  card.id = post.id;

  card.innerHTML = `
    <p class="posts__title">${post.title}</p>
    <p class="posts__body">${post.body}</p>

    <div class="posts__comments"></div>
  `;

  return card;
};

const showPosts = postsArr => {
  const main = document.querySelector(".main__content");

  postsArr.forEach(post => {
    const card = createPost(post);
    main.append(card);
  });
};

const getPosts = () => {
  const id = location.hash.slice(1);
  document.querySelector(".spinner").classList.toggle("hidden");

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(posts => {
      showPosts(posts);
      showComments(posts);
      document.querySelector(".spinner").classList.toggle("hidden");
    })
    .catch(error => console.error(error));
};

document.addEventListener("DOMContentLoaded", getPosts);
