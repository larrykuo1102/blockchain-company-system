//express_demo.js 文件
var express = require('express');
var app = express();
const Web3 = require('web3')
const fs = require( 'fs' )
const cors = require('cors');
const contract = JSON.parse(fs.readFileSync('./build/contracts/Company.json'));
const contract_address = "0xf86e9e89f2d27C84CAf6784B160828D854790ceF" ;
app.use(cors());
app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/api/abi', async (req, res) => {
        // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:7545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/b15f2435af904c2282c62839cd18144e"));
    
    
    let temp = await fs.readFileSync('./CV_Ruei-Yi Kuo.docx', 'binary')
// fs.writeFileSync( './test.docx', temp, 'binary' )
    // console.log( temp.length  )
    
    // const abi_temp = JSON.parse(contract)
    const abi = contract.abi ;

    
    // console.log( abi )
    const contract_instance = new web3.eth.Contract( abi,contract_address ) ;
    // console.log( contract_instance )
    await contract_instance.methods.getNumber(10,20).call()
    // console.log(  ) 
    // .call()
    // .then(console.log);
   

    // console.log( test_return )
    // web3.eth.getBalance(address, (err, wei) => {
        
    //     // 余额单位从wei转换为ether
    //     balance = web3.utils.fromWei(wei, 'ether')
    //     console.log("balance: " + balance)
    
    //     res.send("balance: " + balance )
    // })

    res.send(contract_instance) ;
})
 



var server = app.listen(3000, function () {
    console.log('listen localhost:3000') ;
})