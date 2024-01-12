const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5000;

//public static path
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../views/partials");

app.set('view engine', 'hbs');
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));


//routing
app.get("", (request, response) => {
  response.render('index');
});

app.get("/about", (request, response) => {
  response.render('about');
});

app.get("/weather", (request, response) => {
  response.render('weather');
});

app.get("*", (request, response) => {
  response.render('404error', {
    errorMsg: 'Opps! Page Not Found'
  });
});

app.listen(port, () => {
  console.log(`Server is live at port: ${port}`)
});