const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');


const app = express();

//this code help to serve static files. Static means img and css and more extension files.
app.use(express.static(path.join(__dirname, 'public')))

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'main'));


app.get('/', (req, res) => {
    res.render('index');
});



app.listen(3000, () => {
    console.log('Serving on port 3000')
})