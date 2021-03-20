// grab environment variables
require("dotenv").config()

// IMPORT EXPRESS
const express = require("express")

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection")

// IMPORT MERCED LOGGER
const { log } = require("mercedlogger")

//IMPORT MIDDLEWARE
const methodOverride = require("method-override")
const morgan = require("morgan")
const cors = require("cors")

// GET PORT FROM ENV OR DEFAULT PORT (|| means if not use default port)
const PORT = process.env.PORT || "2021"

/////////////////////////////////////
// Create Express Application Object
/////////////////////////////////////
const app = express()

/////////////////////////////////////
// Set the View Engine
/////////////////////////////////////
app.set("view engine", "ejs")

/////////////////////////////////////
// Setup Middleware
/////////////////////////////////////
app.use(cors()) // Prevent Cors Errors if building an API
app.use(methodOverride("_method")) // Swap method of requests with _method query
app.use(express.static("public")) // serve the public folder as static
app.use(morgan("tiny")) // Request Logging
app.use(express.json()) // Parse json bodies
app.use(express.urlencoded({ extended: false })) //parse bodies from form submissions

/////////////////////////////////////
// Routes and Routers
/////////////////////////////////////

// Test Route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
})

/////////////////////////////////////
// App Listener
/////////////////////////////////////
app.listen(PORT, () =>
  log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
)