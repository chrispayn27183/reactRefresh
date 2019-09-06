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
    next();
});

app.post('/rota', async (req, res) => {    
    try{
        const body = req.body  //{"teamId": 1,"monthNo": 10}
        console.log(req.body);
        const teamId = body.teamId; 
        const monthNo = body.monthNo; 
        const yearNo = body.yearNo;
        const rota = await schedule.getRota(teamId, monthNo, yearNo);
        res.status(200).send(rota);
    }catch(error){
        res.sendStatus(500); 
        console.log(error); 
    }
});

app.post('/updaterota', async (req, res) => {
    try{
        const selection = req.body.selection; 
        const userId = req.body.userId;
        const temp = [];
        selection.map(n => {
            temp.push(`(${n},${userId})`);
        })
        const queryString = temp.join();
        await schedule.updateRota(queryString);
        console.log('updated rota:' + queryString);
    }catch(error){
        res.sendStatus(500);
        console.log(error); 
     }
})

app.get('/testcon', async (req, res) => {
    res.status(200).send('OKAY!');
});

app.listen(port, () => console.log(`Schedule app listening on port ${port}.`));