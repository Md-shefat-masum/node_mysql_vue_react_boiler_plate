const express = require("express");
const frontendController = require("../../../app/http/controllers/frontend/frontend.controller");
const backendController = require("../../../app/http/controllers/backend/backend.controller");
const authController = require("../../../app/http/controllers/auth/auth.controller");
const router = express.Router();

module.exports = router
    .get("/", frontendController.home)
    .get("/about", frontendController.about)
    .get("/contact", frontendController.contact)

    .get("/login", frontendController.login)
    .post("/login", authController.login_submit)
    .post("/logout", authController.logout)

    .get("/signup", frontendController.signup)

    .get("/dashboard", backendController.dashboard)
