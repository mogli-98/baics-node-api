const connection = require('./connection');
const  express = require('express');
const bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json());

app.get('/employee', (req, res) => {
    connection.query('SELECT * FROM employee',  (err, rows) => {
        if(err){
            console.log(err);
        }else{
            console.log(rows)
        }
    })
}),
// get data by id
app.get('/employee/:id', (req, res) => {
    connection.query('SELECT * FROM employee WHERE id = ? ', [req.params.id],  (err, rows) => {
        if(err){
            console.log(err);
        }else{
            console.log(rows)
        }
    })
}),
app.delete('/employee/:id', (req, res) => {
    connection.query('DELETE  FROM employee WHERE id = ? ', [req.params.id],  (err, rows) => {
        if(err){
            console.log(err);
        }else{

            console.log(rows)
        }
    })
}),
app.post('/employee', (req, res) => {
    var emp= req.body
    var empdata = [emp.name, emp.salary]
    connection.query('INSERT  INTO employee(name,salary) values(?)',[empdata],(err, rows) => {
        if(err){
            console.log(err);
        }else{
            
            console.log(rows)
        }
    })
})

app.listen(3000, () => console.log('listening on port'));
