const express = require('express'),
    bodyParser = require('body-parser'),
    // In order to use PUT HTTP verb to edit item
    methodOverride = require('method-override'),
    // Mitigate XSS using sanitizer
    sanitizer = require('sanitizer'),
    app = express(),
    port = 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
// https: //github.com/expressjs/method-override#custom-logic
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method;
        delete req.body._method;
        return method
    }
}));


let dailytracker = [];

/* The to do list and the form are displayed */
app.get('/dailytracker', function (req, res) {
        res.render('dailytracker.ejs', {
            dailytracker,
            clickHandler: "func1();"
        });
    })

    /* Adding an item to the to do list */
    .post('/dailytracker/add/', function (req, res) {
        // Escapes HTML special characters in attribute values as HTML entities
        let newdailytracker = sanitizer.escape(req.body.newdailytracker);
        if (req.body.newdailytracker != '') {
            dailytrackerlist.push(newdailytracker);
        }
        res.redirect('/dailytracker');
    })

    /* Deletes an item from the to do list */
    .get('/dailytracker/delete/:id', function (req, res) {
        if (req.params.id != '') {
            dailytrackerlist.splice(req.params.id, 1);
        }
        res.redirect('/dailytracker');
    })

    // Get a single dailytracker item and render edit page
    .get('/dailytracker/:id', function (req, res) {
        let dailytrackerIdx = req.params.id;
        let dailytracker = dailytrackerlist[dailytrackerIdx];

        if (dailytracker) {
            res.render('edititem.ejs', {
                dailytrackerIdx,
                dailytracker,
                clickHandler: "func1();"
            });
        } else {
            res.redirect('/dailytracker');
        }
    })

    // Edit item in the dailytracker list 
    .put('/dailytracker/edit/:id', function (req, res) {
        let dailytrackerIdx = req.params.id;
        // Escapes HTML special characters in attribute values as HTML entities
        let editdailytracker = sanitizer.escape(req.body.editdailytracker);
        if (dailytrackerIdx != '' && editdailytracker != '') {
            dailytrackerlist[dailytrackerIdx] = editdailytracker;
        }
        res.redirect('/dailytracker');
    })
    /* Redirects to the to do list if the page requested is not found */
    .use(function (req, res, next) {
        res.redirect('/dailytracker');
    })

    .listen(port, function () {
        // Logging to console
        console.log(`dailytrackerlist running on http://0.0.0.0:${port}`)
    });
// Export app
module.exports = app;
