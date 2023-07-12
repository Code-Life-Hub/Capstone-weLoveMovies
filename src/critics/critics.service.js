// Path: src/critics/critics.service.js

const knex = require("../db/connection");

function read(critic_id) {
    return knex("critics")
        .select("*")
        .where({ critic_id })
        .first();
}

module.exports = {
    read,
};
