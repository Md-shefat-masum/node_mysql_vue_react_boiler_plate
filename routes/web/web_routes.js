const express = require("express");
const frontendWeb = require("./partials/frontend.web");
const { set_session_old } = require("../../app/utils/session");
const web_routes = express.Router();

web_routes.use(set_session_old);
web_routes.use(frontendWeb);

module.exports.web_routes = web_routes;
