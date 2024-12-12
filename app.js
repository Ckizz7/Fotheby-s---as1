const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const path = require("path");


const app = express();

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Routes
const indexRoutes = require("./routes/index.routes");
const auctionsRoutes = require("./routes/auctions.routes");
const categoriesRoutes = require("./routes/categories.routes");

app.use("/", indexRoutes);
app.use("/auctions", auctionsRoutes);
app.use("/categories", categoriesRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));