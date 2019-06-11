const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    const file = path.join(rootDir, 'views', 'shop.html');
    res.sendFile(file);
});

module.exports = router;
