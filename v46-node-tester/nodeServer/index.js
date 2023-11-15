import http from "http";

// Request = info från användaren
// Response = används för att skicka tillbaka

const app = http.createServer((req, res) => {
  res.write("hello world3");
  res.end();
});

app.listen(4002, () => {
  console.log("server started listening on port 4002");
});
