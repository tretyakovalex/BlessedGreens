const db = require('../util/database');

module.exports = class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static find(username){
        return db.execute(
            'SELECT * FROM users WHERE username = ?', 
            [username]
        );
    }

    static save(user){
        return db.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [user.username, user.email, user.password]
        );
    }
};