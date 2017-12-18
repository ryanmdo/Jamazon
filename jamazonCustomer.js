//setup requires
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
    //console.log('connected as id ' + connection.threadId);
;})






//lists all the products and their information
function listAllProducts(){
    //hard-coded for 10
    //build a simple tab separated tabled
    console.log('Welcome to the Jamazon Web Store.\n')

    for(var i=1;i<11;i++){
        connection.query('SELECT * FROM jamazon_inventory WHERE item_id='+i,function(err, res){
            if (err) throw err;
            console.log(JSON.stringify(res))

        
        })
    }

}

listAllProducts();


//7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.
function processInventory(){


}




//asks user for the quantity desired
function requestQuantity(){
    //analogous to chosenItemID in requestItemID
    var chosenQuantity;



    validateQuantity();
}



//utilizes inquire to ask for the item ID.
function requestItemID(){
    //going to write an inquire prompt that gets the prompt
    var chosenItemID;




    connection.query('SELECT * FROM jamazon_inventory WHERE item_id='+chosenItemID,
    function(err,res){
        if (err) throw err;

    })



    requestQuantity();
}