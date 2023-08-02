const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejscrud'
});



connection.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Connected Database');
    }
})


module.exports = connection;