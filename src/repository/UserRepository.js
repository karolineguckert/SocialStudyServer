const User = require("../entity/User");
// const { Op } = require('@sequelize/core');


async function insert(req) {
    let user = await
        User.create({
                  email: req.email,
                  password: req.password,
                  nickname: req.userName,
                  id_user_level: req.idUserLevel,
                  id_user_stamps: null
        });
}

async function getAll(req) {
    return  await User.findAll();
}

async function remove(req) {
    await User.destroy({
        where: {
            name: req.authorName,
        }
    });
}

async function update(req) {
    await User.update({name: req.authorName}, {
        where: {
            name: req.oldAuthorName,
        }
    });
}

async function login(req) {
    let user = await
        User.findOne({
            where:{
                email: req.email,
                password: req.password,
            }
        });
    if (user == null){
        return -1;
    } else {
       return user.id;
    }
}

module.exports = {insert, getAll, remove,update,login};
