const express = require('express')
//const bodyParser = require('body-parser'); 
const app = express()
const port = 3030; 
const schedule = require('./db_queries');
const cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    //res.setHeader('Access-Control-Allow-Headers', 'monthNo');
    //res.setHeader('Access-Control-Allow-Headers', 'teamId');
    
    next();
});

app.post('/rota', async (req, res) => {    
    try{
        const body = req.body  //{"teamId": 1,"monthNo": 10}
        console.log(req.body);
        const teamId = body.teamId; 
        const monthNo = body.monthNo; 
        const rota = await schedule.getRota(teamId, monthNo);
        res.status(200).send(rota);
    }catch(error){
        res.sendStatus(500); 
        console.log(error); 
    }
});

app.get('/testcon', async (req, res) => {
    res.status(200).send('OKAY!');
});

// app.post('/updaterota', async (req, res) => {
//     const user_id = req.body.user_id; 
//     const calendar_id = JSON.stringify(req.body.selection);
// })

// insert into rota (calendar_id, user_id) values
//     (2,2),
//     (3,2),
//     (4,2),
//     (5,2),
//     (6,2),
//     (7,2),
//     (8,2),
//     (9,2)
// ;

app.listen(port, () => console.log(`Schedule app listening on port ${port}.`));