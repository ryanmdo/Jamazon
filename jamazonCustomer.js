var inquirer = require('inquirer');
var mysql = require('mysql');

//setup mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'live',
    database: 'products_db'
})

connection.connect( function(err){
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
;})


connection.query('SELECT * FROM jamazon_inventory WHERE item_id=2',function(err, res){
    if (err) throw err;
    console.log(res)

})







//lists all the products and their information
function listProducts(){
    for(var i=1;i<11;i++){
        connection.query('SELECT * FROM jamazon_inventory WHERE item_id='+i,function(err, res){
            if (err) throw err;
            console.log(res)
        
        })
    }

}

listProducts();

//given the selection, return the quantity
function getInventory(){


}
