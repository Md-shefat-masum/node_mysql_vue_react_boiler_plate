var bodyParser = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json({
    limit: "50mb",
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
});

module.exports = (app) => {
    app.use(jsonParser);
    app.use(urlencodedParser);
    app.set("json spaces", 3);
};
