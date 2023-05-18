const env = require("../app/utils/env");
const root_path = require("../app/utils/root_path");

module.exports = (app) => {
    app.set('view engine', env('VIEW_ENGINE'));
    app.set('views', root_path + '/' + env('VIEW_PATH'));
}
