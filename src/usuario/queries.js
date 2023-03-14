const getUsers = "SELECT * FROM usuario";
const getUserByUsername = "SELECT * FROM usuario WHERE username = $1"
const checkUsernameExist = "SELECT s FROM usuario s WHERE s.username = $1"
const addUser = "INSERT INTO usuario (username, password, name, age) VALUES ($1, $2, $3, $4)";
const removeUser = "DELETE FROM usuario where username = $1"

module.exports = {
    getUsers,
    getUserByUsername,
    checkUsernameExist,
    addUser,
    removeUser,
};