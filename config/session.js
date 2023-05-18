const session = require("express-session");
const {
    session_error,
    check_and_remove_session_flush_error,
    get_session_old,
} = require("../app/utils/session");

module.exports = (app) => {
    app.set("trust proxy", 1); // trust first proxy
    app.use(
        session({
            secret: "node-session-secret",
            resave: false,
            saveUninitialized: true,
            cookie: {
                path: "/",
                secure: false,
                httpOnly: true,
                maxAge: 60000, // 1 hour
                domain: null,
                expires: null,
                sameSite: false,
            },
        })
    );
    app.use((req, res, next) => {
        // share session to all routes
        res.locals.session = req.session;
        res.locals.session_error = session_error;
        res.locals.get_session_old = get_session_old;

        check_and_remove_session_flush_error(req);

        next();
    });
};
