const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "" });
});

app.post("/submit", (req, res) => {
    const { name, email, phone, age } = req.body;

    res.render("index", {
message: `
Welcome ${name}!<br><br> 
Email: ${email}<br>
Phone: ${phone}<br>
Age: ${age}<br><br>
Form submitted successfully.
`
    });
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
    
});