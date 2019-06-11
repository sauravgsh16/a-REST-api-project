const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const productRoutes = require('./routes/product');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// To serve static pages , eg css
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', productRoutes);
app.use(shopRoutes);

// 404 : Unreachable
app.use((req, res, next) => {
    const file = path.join(__dirname, 'views', '404.html');
    res.status(404).sendFile(file);
});

app.listen('3000');
