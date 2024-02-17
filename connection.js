const mysql = require("mysql2");
var mysqlConnection  = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password:"rootrootroot123@", 
    database: "empdb",
});
 mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error connecting to")
    }else{
     console.log("Connect")   
    }
})
module.exports= mysqlConnection