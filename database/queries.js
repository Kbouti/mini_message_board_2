const pool = require("./pool");

async function getAllMessages() {
    const {rows} = await pool.query("select * from messages");
    return rows;
}


async function createRow(newEntry) {
console.log(`creating a new row. `)
    const sql = `insert into messages (text, author, date, time) values (${newEntry.text}, ${newEntry.author}, ${newEntry.date}, ${newEntry.time});`
console.log(`sql: ${sql}`);

// ******************************************************************************************************
// OK! The current issue is that it just isn't liking our date format. That seems fixable. 
// ******************************************************************************************************


    // const response = await pool.query(sql);
    // console.log(response);
    // return;
}


module.exports = {
    getAllMessages,
    createRow
}