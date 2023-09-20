const express = require("express");
const cors = require("cors");

const contactsRoute = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message : "Welcome to contact book application."});
})

app.use("/api/contacts", contactsRoute);

module.exports = app;