const Question = require("../entity/Question");
// const { Op } = require('@sequelize/core');


async function insert(req) {
    let question = await
        Question.create({
            email: req.email,
            password: req.password,
            nickname: req.userName,
            id_user_level: req.idUserLevel,
            id_user_stamps: null
        });
}

async function getAll(req) {

}

async function remove(req) {

}

async function update(req) {

}
module.exports = {insert, getAll, remove,update};
