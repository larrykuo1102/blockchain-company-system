const Web3 = require('web3')
const fs = require('fs')

// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/b15f2435af904c2282c62839cd18144e"));
// }

// const address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"


// web3.eth.getBlock('latest').then(console.log)


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:7545"));
}

const address = "0xf86e9e89f2d27C84CAf6784B160828D854790ceF"


web3.eth.getBlock('latest').then(console.log)


//




// web3.eth.getBalance(address, (err, wei) => {

//     // 余额单位从wei转换为ether
//     balance = web3.utils.fromWei(wei, 'ether')
//     console.log("balance: " + balance)

    
// })

// const contract_address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"

// const contract = new web3.eth.Contract(abi, contract_address)

// console.log( contract )



// let temp = fs.readFileSync('./CV_Ruei-Yi Kuo.docx', 'binary')
// fs.writeFileSync( './test.docx', temp, 'binary' )
// console.log( temp.length  )