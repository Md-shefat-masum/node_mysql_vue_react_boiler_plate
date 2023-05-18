var http = require("http");
var express = require("express");
var app = express();
var bootstrap = require("./bootstrap/app");
const config_app = require("./app/utils/config_app");
const { db } = require("./config/prisma");

// boot server dependencies
bootstrap(app);

// Do anything you like with the rest of your express application.
app.get("/", function (req, res) {
    res.render("welcome");
});

app.get("/json", async function (req, res) {

    res.json({ msg: "welcome", user });
});

app.get("*", function (req, res) {
    res.status(404).json("notfound");
});

if (require.main === module) {
    db.$connect()
        .then(async () => {
            console.log('try');
            var server = http.createServer(app);
            var port = config_app("port") || 5000;
            server.listen(port, "127.0.0.1", function () {
                console.log("Listening on %j", server.address());
                console.log(
                    `Server is running on`,
                    "\x1b[33m",
                    ` ${config_app("url")}:${port} \n`,
                    "\x1b[0m"
                );
                console.log("\x1b[0m", "");
            });
        })
        .then(async () => {
            await db.$disconnect();
        })
        .catch(async (e) => {
            console.error(e);
            await db.$disconnect();
            process.exit(1);
        });
}
