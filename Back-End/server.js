require("dotenv").config();

// Web server config
const PORT = 8001;
const ENV = process.env.NODE_ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.enable("trust proxy");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const methodOverride = require("method-override");

const server = require("http").createServer(app);
const cors = require("cors");
app.use(cors());

const environment = "http://localhost:3030"; // < -- frontend conn.

const db = require("./lib/db.js");
db.connect();

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cookieSession({
    name: "session",
    keys: ["Timmy", "Enze", "Grace"],
  })
);

// override for put, patch and delete methods
app.use(methodOverride("_method"));

// queries
const { checkUserByEmail } = require("./db/queries/user-queries");

//routes
const usersRouter = require("./routes/users.js");
const markerRouter = require("./routes/markers.js");
app.use("/users", usersRouter);
app.use("/markers", markerRouter);
app.post("/login", (req, res) => {
  const inputEmail = req.body.inputUser.email;
  const inputPassword = req.body.inputUser.password;

  checkUserByEmail(inputEmail, inputPassword)
    .then((data) => res.json(data))
    .catch((err) => console.log("Email/password is incorrect", err));
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
