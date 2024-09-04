const pool = require("./pool");

async function getAllMessages() {
    const {rows} = await pool.query("select * from messages");
    return rows;
}


async function createRow(newEntry) {
console.log(`creating a new row. `)


function formatDate(value) {
    let date = new Date(value);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return day + '-' + month + '-' + year;
}


function convertDate(value) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(value)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }


let rawDate = newEntry.date;
let formattedDate = formatDate(rawDate);
let convertedDate = convertDate(rawDate);
console.log(`rawDate: ${rawDate}`);
console.log(`formattedDate: ${formattedDate}`);
console.log(`convertedDate: ${convertedDate}`);


const newDate = new Date(rawDate);
console.log(`newDate: ${newDate}`);


let rawTime = newEntry.time;




    const sql = `insert into messages (text, author, date) values (${newEntry.text}, ${newEntry.author}, ${convertedDate});`
console.log(`sql: ${sql}`);

// ******************************************************************************************************
// OK! The current issue is that it just isn't liking our date format. That seems fixable. 

// SQL isn't liking the date we're trying to give it. I think it just wants DD/MM/YYYY
// Okkkk now it it's saying column "message text here" doesn't exist???
// ******************************************************************************************************


    const response = await pool.query(sql);
    console.log(response);
    return true;
}


module.exports = {
    getAllMessages,
    createRow
}