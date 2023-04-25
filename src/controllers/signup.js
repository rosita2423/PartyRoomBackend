
const { connect } = require('../database')

const createUser = async(req, res) => {
    const connection = await connect();
    const {name, pass} = req.body;
    try{
        const[rows] = await connection.query('INSERT INTO USERS VALUES (NULL, ?, ?, NULL)', [
        name,
        pass
        ]);
        res.json ({
            id: rows.insertId, ...req.body
        })
    }
    catch(e){
        res.json(e);
    }
}
module.exports = {createUser};