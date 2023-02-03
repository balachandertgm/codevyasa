'use strict'
const jwt = require("jsonwebtoken");
const DB = require('./../db/dbhelper');
const util = require('./../util');
const TOKEN_KEY = "CODEVYASAASSESSMENT";

const getUsers = (request, response) => {
    DB.runQuery("SELECT * FROM public.user", [], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(util.responseJSONFormat(true, results.rows));
    })
}

const saveUser = (request, response) => {
    let pwdEncrypted = util.passwordEncrypt(request.body.password);
    let saveUserQuery = `INSERT INTO public.user(name, email, password) VALUES ('${request.body.fullname}', '${request.body.email}', '${pwdEncrypted}');`;

    DB.runQuery(saveUserQuery, [], (error, results) => {
        if (error) {
            response.status(500).json(util.responseJSONFormat(false, error))
        } else {
            response.status(201).json(util.responseJSONFormat(true, results.rows))
        }

    })

}

const userLogin = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
    const pwdEncrypted = util.passwordEncrypt(password);

    // Validate user input
    if (!(email && password)) {
        response.status(400).send(util.responseJSONFormat(false, "All input is required(email & password)"));
        return
    }

    //get user info details by emailid

    let userSelectQuery = `SELECT id, email, name, password FROM public.user WHERE email='${email}';`;

    DB.runQuery(userSelectQuery, [], (error, results) => {
        if (error) {
            response.status(500).json(util.responseJSONFormat(false, error))
            return
        }

        if (results.rows.length == 0) {
            response.status(400).json(util.responseJSONFormat(false, "Given email address not available.Kindly register with this email id"));
            return
        }

        if (results.rows[0].password != pwdEncrypted) {
            response.status(400).json(util.responseJSONFormat(false, "Given Password is incorrect, login with correct password"));
            return
        }

        delete results.rows[0].password
        const token = jwt.sign(results.rows[0], TOKEN_KEY);
        results.rows[0].token = token
        response.status(200).json(util.responseJSONFormat(true, results.rows))
    })

    // response.status(200).json(util.responseJSONFormat(true, request.body))
}

const userProfile = (request, response) => {
    const token = request.body.token || request.query.token || request.params.token || request.headers["x-access-token"];
    let payload = jwt.decode(token);
    // console.log(payload);
    response.status(200).json(util.responseJSONFormat(true, payload))
}

const userLogout = (request, response) => {
    response.status(200).json(util.responseJSONFormat(true, ""))
}
module.exports = {
    getUsers,
    saveUser,
    userLogin,
    userProfile,
    userLogout
}