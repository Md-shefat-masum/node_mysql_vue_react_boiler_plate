const { Session } = require("express-session");

/**
 *  Errors will be removed from the session after a single printing opportunity.
 * @param {Request} req
 */
module.exports.check_and_remove_session_flush_error = (req) => {
    // Errors will be removed from the session after a single printing opportunity.
    if (req.session?.isErrorRendered >= 0) {
        req.session.isErrorRendered++;
    }
    if (req.session.isErrorRendered >= 2) {
        req.session.hasError = false;
        req.session.errors = [];
        req.session.old = {};
    }
};

/**
 *  Errors will be removed from the session after a single printing opportunity.
 * @param {Request} req
 * @param {Array} errors
 */
module.exports.set_session_flush_error = (req, errors = []) => {
    req.session.hasError = true;
    req.session.errors = errors;
    req.session.isErrorRendered = 0;
};

/**
 *
 * @param {Session} session
 * @param {String} key
 * @param {HTMLElement | HTMLBREAKELement} seperator
 */
module.exports.session_error = (session, key, seperator = ", ") => {
    if (session.hasError) {
        return session.errors
            .filter((err) => err.path === key)
            .map((i) => i.msg)
            .join(seperator);
    }
};

/***
 * receive form data and set to session for one time use
 *
 */
module.exports.set_session_old = (req,res,next) => {
    if(Object.keys(req.body).length){
        req.session.old = req.body;
        req.session.isErrorRendered = 0;
    }
    next()
};

/***
 * retrive old form data from session
 *
 */
module.exports.get_session_old = (session, key) => {
    if(session.old && session.old[key]){
        return session?.old[key] && session?.old[key];
    }
};
