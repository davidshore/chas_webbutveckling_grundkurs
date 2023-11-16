import http from "http";

const app = http.createServer((req, res) => {
  console.log("nu besökte nån min sajt");

  res.write("<h1>hello</h1>");
  res.end();
});

app.listen(5002, () => {
  console.log("Nu har servern startat");
});
