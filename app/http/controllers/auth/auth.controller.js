const { body, validationResult } = require("express-validator");
const { set_session_flush_error } = require("../../../utils/session");

const login_validate = async (req) => {
    await body("email")
        .not()
        .isEmpty()
        .withMessage("the email field is required")
        .isEmail()
        .withMessage("input type should be email")
        .run(req);

    await body("password")
        .not()
        .isEmpty()
        .withMessage("the password field is required")
        .run(req);

    let result = validationResult(req);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = {
    login_submit: async (req, res) => {
        let validate = await login_validate(req);
        if (validate.hasError) {
            set_session_flush_error(req, validate.errors)
            return res.redirect("/login");
        }
        console.log(req.body, validate);

        req.session.user = {
            name: "admin",
            pic: "avatar.png",
        }
        req.session.isAuth = true;

        return res.redirect('/dashboard')
    },

    logout: function(req,res){
        req.session.user = {}
        req.session.isAuth = false;
        return res.redirect('/')
    }
};
