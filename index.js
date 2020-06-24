const express = require('express')
const app = express()
const path = require('path')
const exphbs  = require('express-handlebars');
const routesWeb = require('./routes/web')

const PORT = process.env.PORT || 3000

const hbs = exphbs.create({
    extname: 'hbs'
})

app.use(express.static('public'))

//view engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//routes
Object.keys(routesWeb).forEach(route => app.use(routesWeb[route]))

app.listen(PORT, () => {
    console.log(`Listening port on ${PORT}`)
})