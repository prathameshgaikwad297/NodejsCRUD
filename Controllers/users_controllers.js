const connection = require('../Connection/mysql_connection');


module.exports = {
    getAllUsers: (req, res) => {
        connection.query(`Select id,name,Email,mobile from users  where isActive=1`, (err, result) => {
            if (err) {
                res.status(400).send({ error: true, message: err.message });
            } else {
                res.status(200).send({ error: false, message: 'success', data: result });
            }
        })
    },
    createUsers: (req, res) => {
        let user = req.body;
        connection.query(`INSERT INTO users(id, name, Email, mobile, password, isActive) VALUES ('0','${user.name}','${user.Email}','${user.mobile}','${user.password}',1)`, (err, result) => {
            if (err) {
                res.status(400).send({ error: true, message: err.message });
            } else {
                res.status(200).send({ error: false, message: 'successfully create users', data: result });
            }
        })
    },
    updateUsers: (req, res) => {
        let id=req.params.id;
        let user = req.body;
        connection.query(`update users set mobile='${user.mobile}' where id=${id}`, (err, result) => {
            if (err) {
                res.status(400).send({ error: true, message: err.message });
            } else {
                res.status(200).send({ error: false, message: 'successfully update user', data: result });
            }
        })
    },
    deleteUsers: (req, res) => {
        let id=req.params.id;
        connection.query(`update users  set isActive=0 where id=${id}`, (err, result) => {
            if (err) {
                res.status(400).send({ error: true, message: err.message });
            } else {
                res.status(200).send({ error: false, message: 'successfully delete user', data: result });
            }
        })
    },
    findUsers: (req, res) => {
        let id =req.params.id;
        connection.query(`Select id,name,Email,mobile from users  where isActive=1 and id =${id}`, (err, result) => {
            if (err) {
                res.status(400).send({ error: true, message: err.message });
            } else {
                res.status(200).send({ error: false, message: 'successfully find user', data: result });
            }
        })
    }
}