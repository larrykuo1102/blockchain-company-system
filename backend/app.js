//express_demo.js 文件
var express = require('express');
var app = express();
const Web3 = require('web3')
const fs = require( 'fs' )
const cors = require('cors');
const { callbackify } = require('util');
var Tx = require('ethereumjs-tx').Transaction;
const contract = JSON.parse(fs.readFileSync('../build/contracts/Company.json'));
const contract_address = "0xd78e91b11731c9a8b94c45ef2ba67a44fd6f0c48" ;
// 0xe6141d8dE14EF05385ffBFa25406F3eCD1B12C8d

const privatekey = '7502f6554753fe17220dca1275c127e6eb5aa17fa1a342b700f20461e1a73c60'

web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/b15f2435af904c2282c62839cd18144e"));

const corsOpts = {
    origin: /myfrontend.com:3000/,
    allowedHeaders: []
  }

app.use(cors());
app.get('/',cors(corsOpts), function (req, res) {
   res.send('Hello World');
})


app.get('/api/abi', async (req, res) => {
        // set the provider you want from Web3.providers
    // web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
    
    let temp = await fs.readFileSync('../CV_Ruei-Yi Kuo.docx', 'binary')

    const abi = contract.abi ;
    const contract_instance = await new web3.eth.Contract( abi,contract_address ) ;
    
})

app.get('/api/getNotesLen', async (req, res ) =>{
    const contract_instance = await new web3.eth.Contract( contract.abi,contract_address ) ;
    const getNotesLen = await contract_instance.methods.getNotesLen( "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00" ).call(  (data, data1 ) => {
        console.log( data ) 
        console.log( data1 ) 
        res.send( "You have " + String(Number(data1)+1) + " Notes"  )
    } )
}) 


app.get('/api/addNote', async (req, res ) =>{

    const account1 = '0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00'; // Your account address 1
    web3.eth.defaultAccount = account1;
    const privateKey1 = Buffer.from(privatekey, 'hex');
    const abi = contract.abi ;
    const contract_Address = "0xd78e91b11731c9a8b94c45ef2ba67a44fd6f0c48";
    const myContract = new web3.eth.Contract(abi, contract_Address);
    const myData = myContract.methods.addNote( "two" ).encodeABI();
    web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
        const txObject = {
            nonce:    web3.utils.toHex(txCount),
            to:       contract_Address,
            value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(1500000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
            data: myData  
        }
        // Sign the transaction
        const tx = new Tx(txObject,{ chain: 42 });
        tx.sign(privateKey1);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        console.log('rawdata', raw ) ; 
        // Broadcast the transaction
        const transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
            console.log("tx",tx)
            console.log( "err", err)
        });
        res.send("Success :" + transaction)
    });

} )

app.get('/api/getNotes', async (req, res  ) =>{
    const contract_instance = await new web3.eth.Contract( contract.abi,contract_address ) ;
    const getNotesLen = await contract_instance.methods.getNotes(  "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00" , 0  )
    .call(  (data, data1 ) => {
        console.log( data ) 
        console.log( data1 ) 
        res.send("Note's content:\n " + data1 )
    } )
} )



var server = app.listen(3000, function () {
    console.log('listen localhost:3000') ;
})