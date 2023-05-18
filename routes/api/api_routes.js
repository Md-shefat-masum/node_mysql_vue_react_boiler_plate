const express = require('express')
const userApi = require('./partials/user.api')
const api_routes = express.Router()

api_routes.use(userApi)

module.exports.api_routes = api_routes
