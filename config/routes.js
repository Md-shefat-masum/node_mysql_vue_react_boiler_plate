const { api_routes } = require("../routes/api/api_routes");
const { web_routes } = require("../routes/web/web_routes");

module.exports = (app) => {
    app.use('/api', api_routes);
    app.use(web_routes);
}
