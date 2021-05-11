const path = require('path');

const mainController = {
    index: (req,res) => {
        //res.sendFile(path.join(__dirname, '../views/home.html'));
        res.render('products/home');
    },
    about: (req,res) => {
        //res.sendFile(path.join(__dirname, '../views/about.html'));
        res.render('about', {title: 'About', name: 'I love photography'});
    }

};

module.exports = mainController;