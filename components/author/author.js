const DB = require('./../db/dbhelper');
const util = require('./../util');

const getRandomAgent = (request, response) => {
    let agentQuery = "SELECT * FROM public.author WHERE id = (SELECT floor(random() * 3 + 1)::int);";
    DB.runQuery(agentQuery, [], (error, results) => {
        if (error) {
            response.status(500).json(util.responseJSONFormat(true, error));
            return
        }
        response.status(200).json(util.responseJSONFormat(true, results.rows[0]));
    })
}

const getAgentRandomQuote = (request, response) => {
    let authorId = request.query.authorId

    if (!(authorId)) {
        response.status(400).send(util.responseJSONFormat(false, "AuthorId input is required"));
        return
    }

    let agentQuery = `SELECT * FROM public.quote WHERE "authorId"=${authorId};`;

    DB.runQuery(agentQuery, [], (error, results) => {
        if (error) {
            response.status(500).json(util.responseJSONFormat(true, error));
            return
        }
        if (results.rows.length === 0) {
            response.status(400).send(util.responseJSONFormat(false, "Given AuthorId Dont have quote please try again with new quote"));
            return
        }
        let randomNum = util.getRandomInteger(1, results.rows.length - 1);
        console.log(randomNum);
        response.status(200).json(util.responseJSONFormat(true, results.rows[randomNum]));
    })
}

module.exports = {
    getRandomAgent,
    getAgentRandomQuote
}