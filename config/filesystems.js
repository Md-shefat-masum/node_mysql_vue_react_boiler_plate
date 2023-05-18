// const app = {
//     public_path: __dirname + '/public',
// }
// module.exports = () => {
//     app.use(express.static(__dirname + '/public'));
// }

const express = require('express');
const env = require("../app/utils/env");
const root_path = require('../app/utils/root_path');

module.exports = {
    static: (app) => app.use(express.static(root_path + '/public')),

    public: {
        root: root_path + "/public",
        url: env("APP_URL" + "/"),
    },

    s3: {
        driver: "s3",
        key: env("AWS_ACCESS_KEY_ID"),
        secret: env("AWS_SECRET_ACCESS_KEY"),
        region: env("AWS_DEFAULT_REGION"),
        bucket: env("AWS_BUCKET"),
        url: env("AWS_URL"),
        endpoint: env("AWS_ENDPOINT"),
    },
};
