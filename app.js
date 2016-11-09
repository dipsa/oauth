var express = require('express');
var logger = require('morgan');
var session = require('express-session');

var Grant = require('grant-express');
var grant = new Grant(require('./config.json'));

var app = express();

app.use(logger('dev'));

//REQUIRED
app.use(session({secret: 'very secret'}));

//MOUNT Grant
app.use(grant);

app.get('/handle_facebook_callback', function(req, res) {
    console.log(req.query);
    res.end(JSON.stringify(req.query, null, 2));
});

app.get('/handle_twitter_callback', function(req, res) {
    console.log(req.query);
    res.end(JSON.stringify(req.query, null, 2));

    //Real scenario - Store user's access token and access secret
});

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000)
});


//Resources
//https://developers.facebook.com/docs/facebook-login/permissions
//https://scotch.io/tutorials/implement-oauth-into-your-express-koa-or-hapi-applications-using-grant