async function postTodo(todoObj) {
  await fetch("http://localhost:4001/todos", {
    method: "POST", // GET, POST, PUT, DELETE
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify(todoObj),
  });
}

const todo = { title: "Handla mat", done: false };

postTodo(todo);
