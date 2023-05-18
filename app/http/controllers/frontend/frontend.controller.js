module.exports = {
    home: async (req, res) => {
        return res.render("frontend/home");
    },
    about: async (req, res) => {
        return res.render("frontend/about");
    },
    contact: async (req, res) => {
        return res.render("frontend/contact");
    },

    login: async (req, res) => {
        return res.render("auth/login");
    },
    signup: async (req, res) => {
        return res.send("signup");
    },
};
