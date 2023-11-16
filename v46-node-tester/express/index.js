import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const todoList = [];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world2");
});

app.get("/minasidor", (req, res) => {
  res.send("hello world");
});

app.post("/todos", (req, res) => {
  const data = req.body;
  console.log("received: ", data);
  todoList.push(data);

  console.log("in todoList: ", todoList);
});

app.listen(4001, () => {
  console.log("Nu har vi startat på port 4001");
});
