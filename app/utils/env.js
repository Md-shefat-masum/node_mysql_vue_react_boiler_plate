require("dotenv").config();
module.exports = (env_key, replace_value=null) => {
    if(env_key){
        return process.env[env_key];
    }
    if(replace_value){
        return process.env[env_key] = replace_value
    }
    return process.env;
};
