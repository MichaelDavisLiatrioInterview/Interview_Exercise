// Import the express module. Minimal and flexible Node.js web app framework.
// require() loads express library for use in application
const express = require('express')
const fs = require('fs')

// Express function is a top-level function exported by the express module
// app represents the web application. Provides methods for defining routes
// and handling requests
const app = express()


// Sets the port number to 8080. Server will listen here for incoming requests
const port = 8080

const lastUpdate = (path) =>
{
  const stats = fs.statSync(path)
  return stats.mtime
}
const date = lastUpdate('./liapp.js')


let format = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/Los_Angeles",
};

const up_date = Intl.DateTimeFormat("en-US", format).format(date);


// Defines route handler for HTTP GET requests made to root URL '/'
app.get('/', (req, res) => {
  
  // Get current timestamp. Date().getTime returns current timestamp in milliseconds since
  // January 1, 1970 (Unix epoch - starting point for measuring time in Unix systems).
  // Gives time Dynamically, creates new timestamp everytime window is refreshed
  const timestamp = new Date().getTime();
  
  // Message object created inside route handler.
  const message =
  {
    "message": "My name is Michael Davis",
    "timestamp": timestamp,
    "time since last update": up_date,
  }

  const mini = JSON.stringify(message)

  // sends message object as a response to the client. Sends object in JSON format by default
  res.send(message)
})

// listen for incoming requests on port (8080).
app.listen(port, () => {
  // message below is shown on console to show that server has started successfully
  // and is ready to handle requests
  console.log(`Liapp listening on port ${port}`)
})