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

// web3.eth.getBalance(address, (err, wei) => {

//     // 余额单位从wei转换为ether
//     balance = web3.utils.fromWei(wei, 'ether')
//     console.log("balance: " + balance)

    
// })


// const abi = [{"constant":true,"inputs":[],
// "name":"mintingFinished",
// "outputs":[{"name":"","type":"bool"}],
// "payable":false,"type":"function"},
// {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},
// {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],
//     "name":"approve",
//     "outputs":[],
//     "payable":false,
//     "type":"function"
// },
// {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
// {"constant":false,
// "inputs":[{"name":"_from","type":"address"},
// {"name":"_to","type":"address"},
// {"name":"_value","type":"uint256"}],
// "name":"transferFrom","outputs":[],
// "payable":false,"type":"function"},
// {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],
// "payable":false,"type":"function"},{"constant":false,"inputs":[],
// "name":"unpause","outputs":[{"name":"","type":"bool"}],
// "payable":false,"type":"function"},
// {"constant":false,"inputs":[{"name":"_to","type":"address"},
// {"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
// {"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
// {"constant":true,
// "inputs":[{"name":"_owner","type":"address"}],
// "name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],
// "payable":false,"type":"function"},{"constant":false,"inputs":[],
// "name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
// {"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
// {"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
// {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},
// {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],
// "name":"transfer","outputs":[],"payable":false,"type":"function"},
// {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},
// {"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
// {"constant":true,"inputs":[{"name":"_owner","type":"address"},
// {"name":"_spender","type":"address"}],"name":"allowance",
// "outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},
// {"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership",
// "outputs":[],"payable":false,"type":"function"},
// {"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},
// {"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},
// {"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},
// {"anonymous":false,"inputs":[],"name":"Pause","type":"event"},
// {"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},
// {"anonymous":false,
//     "inputs":[
//         {"indexed":true,"name":"owner","type":"address"},
//         {"indexed":true,"name":"spender","type":"address"},
//         {"indexed":false,"name":"value","type":"uint256"}],
//         "name":"Approval","type":"event"},
// {"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},
// {"indexed":true,"name":"to","type":"address"},
// {"indexed":false,"name":"value","type":"uint256"}],
// "name":"Transfer","type":"event"}]


// const contract_address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"

// const contract = new web3.eth.Contract(abi, contract_address)

// console.log( contract )



let temp = fs.readFileSync('./CV_Ruei-Yi Kuo.docx', 'binary')
// fs.writeFileSync( './test.docx', temp, 'binary' )
console.log( temp.length  )