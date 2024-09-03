const pool = require("./pool");

async function getAllMessages() {
    const {rows} = await pool.query("select * from messages");
    return rows;
}



module.exports = {
    getAllMessages
}