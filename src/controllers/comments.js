
const {connect} = require('../database');

 const getComments = async(req, res) => {
    const connection = await connect(); 
    try{
        const[rows] = await connection.query('SELECT C.ID, U.NAME, C.COMMENT FROM COMMENTS C INNER JOIN USERS U WHERE U.ID = C.USER_ID;');
        res.json(rows);
    }
    catch(e){
        res.json(e);
    }
}

/**
 * This function inserts a new comment into a database table and returns the user, comment, and id of
 * the inserted comment.
 */
 const SubmitComment = async(req, res) => {
    const connection = await connect();
    const {comment, id} = req.body
    try{
        const[rows] = await connection.query(`INSERT INTO COMMENTS VALUES (NULL, "${comment}", ${id});`);
        res.json(
            ...req.body
        )
        console.log("OK");
    }
    catch(e){
        res.json(e);
    }
 }

module.exports = {getComments, SubmitComment};