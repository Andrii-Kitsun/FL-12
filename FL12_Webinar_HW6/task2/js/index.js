const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

const setDone = function() {
  $(this).toggleClass("done");

  const elem = todos.find(task => task.text === this.textContent);
  elem.done = $(this).hasClass("done") ? true : false;
  localStorage.setItem("TODOList", JSON.stringify(todos));
};

const deleteTask = function() {
  $(this)
    .parent()
    .remove();

  todos.forEach((task, i) => {
    if (task.text === $(this).prev()[0].textContent) {
      todos.splice(i, 1);
      return;
    }
  });
  localStorage.setItem("TODOList", JSON.stringify(todos));
};

$add.click(function(event) {
  event.preventDefault();
  const item = `
    <li class="item">
      <span class="item-text">${$input.val()}</span>
      <button class="item-remove">Remove</button>
    </li>
  `;

  $(item).appendTo($list);

  todos.push({
    text: $input.val(),
    done: false
  });
  localStorage.setItem("TODOList", JSON.stringify(todos));

  $(".item-text").click(setDone);
  $(".item-remove").click(deleteTask);

  $input.val("");
});

$(".item-text").click(setDone);
$(".item-remove").click(deleteTask);
localStorage.setItem("TODOList", JSON.stringify(todos));

$("#search-submit").click(event => {
  event.preventDefault();
  const value = $("#search-input").val();
  $(`.item-text`)
    .parent()
    .css("border", "none");

  todos.forEach(task => {
    $(`.item-text:contains(${value})`)
      .parent()
      .css("border", "1px solid green");
  });
});

(function($) {
  $.fn.showTodo = function(todoArr) {
    const ul = $('<ul class="list"></ul>');
    todoArr.forEach(task => {
      const state = task.done ? "done" : "";
      const item = `
        <li class="item">
          <span class="item-text ${state}">${task.text}</span>
          <button class="item-remove">Remove</button>
        </li>
      `;

      $(item).appendTo(ul);
    });

    $(ul).appendTo(this);

    $(".item-text").click(setDone);
    $(".item-remove").click(deleteTask);
    return this;
  };
})(jQuery);
