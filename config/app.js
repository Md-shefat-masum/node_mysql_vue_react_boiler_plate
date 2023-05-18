const env = require("../app/utils/env");

module.exports = {
    name: env("APP_NAME"),
    env: env("APP_ENV" || "development"),
    debug: env("APP_DEBUG" == "true" ? ture : false),
    url: env("APP_URL" || "http://127.0.0.1"),
    port: env("PORT" || "5000"),
    timezone: "UTC",
    locale: "en",
    key: env("APP_KEY"),
};
