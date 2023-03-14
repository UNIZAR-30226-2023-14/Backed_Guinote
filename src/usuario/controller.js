const pool = require('../../db');
const queries = require('./queries');


const getUsers = (req, res) =>{
    //console.log('Getting users')
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserByUsername = (req, res) =>{
    const username = req.params.username;
    pool.query(queries.getUserByUsername, [username], (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) =>{
    const{ username, password, name, age } = req.body;

    //Comprobar que el username no exista
    pool.query(queries.checkUsernameExist, [username], (error, results) => {
        if( results.rows.length ){
            res.send("Username ya existe.");
        } else{
            //Añadir usuario a base de datos
            pool.query(
                queries.addUser, 
                [username, password, name, age], 
                (error, results) => {
                if (error) throw error;
                res.status(201).send("Usuario creado correctamente");
                //console.log("El Usuario ha sido creado correctamente!");
            });
        }
    });
};

const removeUser = (req, res) => {
    const username = req.params.username;
    pool.query(queries.getUserByUsername, [username], (error, results) =>{
        const noUserFound = !results.rows.length;
        if (noUserFound){
            res.send("Usuario no existe en la base de datos");
        } 
        else{
            pool.query(queries.removeUser, [username], (error, results) =>{
                if (error) throw error;
                res.status(200).send("Usuario eliminado correctamente");
                
            });
        }
    });
};

module.exports = {
    getUsers,
    getUserByUsername,
    addUser,
    removeUser,
};