const { log } = require("console");
const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'))

app.get("/", (req, res) => {
  // res.send("Hello From Express");
  // res.send("<h1>Hello From Express</h1>");
  //   res.send({ msg: "Hello" });
  //   res.json({ msg: "Hello" });
  // res.send(req.header("host"));
  // res.send(req.header("user-agent"));
  //   res.send(req.rawHeaders); // get an array with all the headers the cache control postman token since we're using postman the user agent the accept value the host all that stuff.
});

app.post("/contact", (req, res) => {
  //   res.send(req.body);
  //   res.send(req.body.name);
  //   res.send(req.header('Content-Type'));

  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }

  // database stuff
  res.status(201).send(`Thank you ${req.body.name}`);
});

app.post("/login", (req, res) => {
  if (!req.header("x-auth-token")) {
    return res.status(400).send("No Token");
  }
  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not authorized");
  }

  res.send("Logged in");
});

app.put("/post/:id", (req, res) => {
  // database stuff

  res.json({
    id: req.params.id,
    title: req.body.title,
  });
});

app.delete("/post/:id", (req, res) => {
  // database stuff

  res.json({msg: `Post ${req.params.id} deleted`});
});

app.listen(5000, () => console.log(`Server started on 5000`));
