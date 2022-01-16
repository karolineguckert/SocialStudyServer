const User = require("../entity/User");

async function insertUser(req) {
    let user = await
        User.create({
                  email: req.email,
                  password: req.password,
                  nickname: req.userName,
                  id_user_level: req.idUserLevel,
                  id_user_stamps: null
        });
}

async function deleteUser(req) {
    await User.destroy({
        where: {
            name: req.authorName,
        }
    });
}

async function updateUser(req) {
    await User.update({name: req.authorName}, {
        where: {
            name: req.oldAuthorName,
        }
    });
}

async function loginUser(req) {
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

module.exports = {insertUser,deleteUser,updateUser,loginUser};
