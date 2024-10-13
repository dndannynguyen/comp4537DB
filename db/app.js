const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Access-Control-Allow-Origin": "*" });

  const parsedURL = url.parse(req.url, true);
  const path = parsedURL.pathname;

  if (path == "/insert" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const reqBody = JSON.parse(body);
      
    res.end(JSON.stringify()); // add new data here
    });
    // do db suff here
  } else if (path == "/query" && req.method == "GET") {
    const query = parsedURL.query;
    const sqlQueryString = query.query;
    // add db stuff here
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify()); // add data here
  }
});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
