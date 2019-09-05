const mysql = require('mysql'); 
const util = require('util');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example', 
    database: 'calendar', 
    charset: 'utf8'
});

const query = util.promisify(conn.query).bind(conn);

const getRota = async (teamId, monthNo) => {
  try {
    const rota = await query(`select 
    calendar.id,
    calendar.date,
    calendar.day,
    user.name as 'user_name', 
    teams.name as 'team_name'
    from calendar
    left join rota 
    on calendar.id = rota.calendar_id
    left join user 
    on rota.user_id = user.id 
    left join teams 
    on user.user_team = teams.id   
    where (teams.id = ${teamId} OR teams.id is null) and month(date) = ${monthNo}
    ;`)
    return rota; 
  }catch(error) {
    throw new Error('Error getting rota: ' + error); 
  }

}

module.exports = {
    getRota
}; 