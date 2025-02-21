let ctr = 1;
let number = 0;
let cos = 160;
function addtodo() {
  const inputElement = document.querySelector("input");
  const value = inputElement.value;
  const divEl = document.createElement("h3");
  divEl.className = "new1";
  divEl.setAttribute("id", ctr);
  number = number + 1;
  divEl.innerHTML =
    number +
    ". " +
    value +
    '<button onclick="delete1(' +
    ctr +
    ')">delete</button>';
  ctr = ctr + 1;
  cos = cos + 100;
  const container = document.querySelector(".container");
  container.style.height = cos + "px";
  const parentEl = document.querySelector(".container");
  parentEl.appendChild(divEl);
  inputElement.value = "";
}

function delete1(index) {
  const element4 = document.getElementById(index); // Use getElementById to select the element by its ID
  element4.remove();
}

function delete2() {
  const container1 = document.querySelector(".container");
  const todos = container1.querySelectorAll("h3");
  todos.forEach((todo) => {
    todo.remove();
  });
  cos = 160;
  container1.style.height = cos + "px";
}

