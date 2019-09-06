const mysql = require('mysql'); 
const util = require('util');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example', 
    database: 'calendar', 
    charset: 'utf8',
    timezone: 'Z'
});

const query = util.promisify(conn.query).bind(conn);

const getRota = async (teamId, monthNo, yearNo) => {
  try {
    const rota = await query(`select 
    calendar.id,
    calendar.date,
    calendar.day,
    day(calendar.date) as 'monthDate',
    month(calendar.date) as 'month',
    year(calendar.date) as 'year',
    user.name as 'user_name', 
    teams.name as 'team_name'
    from calendar
    left join rota 
    on calendar.id = rota.calendar_id
    left join user 
    on rota.user_id = user.id 
    left join teams 
    on user.user_team = teams.id   
    where (teams.id = ${teamId} OR teams.id is null) and month(date) = ${monthNo} and year(date) = ${yearNo}
    order by date
    ;`)
    return rota; 
  }catch(error) {
    throw new Error('Error getting rota: ' + error); 
  }
}

const updateRota = async (queryString) => {
  try{
    await query(`insert into rota (calendar_id, user_id) values ${queryString};`) 
  }catch(error){
    throw new Error('Error updating rota: '+ error); 
  }
} 

module.exports = {
    getRota,
    updateRota
}; 