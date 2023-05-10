import express from 'express'
import mysql  from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rootadmin",
    database:"client"
})

app.get('/', (req, res)=>{
    const sql = "SELECT * FROM client.newclient;";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result);
    });
});

app.post('/cliente',(req,res)=>{
    const sql = "INSERT INTO client.newclient (name, email, numero) VALUES(?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.numero
    ];
    db.query(sql, values, (err, result)=>{
        if(err) return res.json(err)
        return res.json(result)
    });
});



app.get('/ler/:id', (req, res)=>{
    const sql = "SELECT * FROM client.newclient WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,id, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result);
    });
});


app.put('/edit/:id',(req,res)=>{
    const sql = "UPDATE client.newclient SET `name`=?, `email`=?, `numero`=? WHERE ID = ?";

    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, req.body.numero, id], (err, result)=>{
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result);
    })
})


app.delete('/delete/:id', (req, res)=>{
    const sql = "DELETE FROM client.newclient WHERE ID=?"
    const id = req.params.id;
    db.query(sql, id, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result);
    })

})
app.listen(8081,()=> {
    console.log("Listening")
})