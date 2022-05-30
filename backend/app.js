//express_demo.js 文件
var express = require('express');
var app = express();
const Web3 = require('web3')
const fs = require( 'fs' )

 
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/test', function(req, res) {
        // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:7545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/b15f2435af904c2282c62839cd18144e"));
    const address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"
    const contract = JSON.parse(fs.readFileSync('./build/contracts/Contract.json', 'utf8'));
    abi = JSON.stringify(contract.abi)

    // web3.eth.getBalance(address, (err, wei) => {
        
    //     // 余额单位从wei转换为ether
    //     balance = web3.utils.fromWei(wei, 'ether')
    //     console.log("balance: " + balance)
    
    //     res.send("balance: " + balance )
    // })

    res.send(abi) ;
})
 



var server = app.listen(3000, function () {
    console.log('listen localhost:3000') ;
})