const {connect} = require('../database');

const Login = async(req, res) => {
    
    const connection = await connect();

    const {user, pass} = req.body
    
    try{
        const [rows] = await connection.query(`SELECT * FROM USERS WHERE NAME = "${user}" AND PASSWORD = "${pass}"`);
        if(rows.length == 0){
            res.json({msg: 'NULL'});
        } else {
            res.json({msg: 'Ok', usr: rows[0].ID});
        }
    }
    catch(e){
        res.json(e);
    }
}
module.exports = {Login};

