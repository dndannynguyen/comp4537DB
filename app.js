const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./public/insert.html", (err, html) => {
      if (err) {
        throw err;
      }
      
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/query") {
    fs.readFile("./public/query.html", (err, html) => {
      if (err) {
        throw err;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
