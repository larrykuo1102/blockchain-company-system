const Web3 = require('web3')
const fs = require('fs')

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/b15f2435af904c2282c62839cd18144e"));
}

const address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"


// web3.eth.getBlock('latest').then(console.log)

// web3.eth.getBalance(address, (err, wei) => {

//         // 余额单位从wei转换为ether
//         balance = web3.utils.fromWei(wei, 'ether')
//         console.log("balance: " + balance)
    
        
// })
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "note",
				"type": "string"
			}
		],
		"name": "addNote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "own",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "index",
				"type": "uint16"
			}
		],
		"name": "getNotes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "own",
				"type": "address"
			}
		],
		"name": "getNotesLen",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "personal",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract_instance = new web3.eth.Contract( abi,contract_address ) ;

console.log( contract_instance )
















// const contract_address = "0x1aaf07459Ebb2d5846ed750dda9121D7dF424D00"

// const contract = new web3.eth.Contract(abi, contract_address)

// console.log( contract )



// let temp = fs.readFileSync('./CV_Ruei-Yi Kuo.docx', 'binary')
// fs.writeFileSync( './test.docx', temp, 'binary' )
// console.log( temp.length  )

// geth --datadir data --networkid 123456  --dev --dev.period value console

// // geth --datadir data init genesis.json
// geth --datadir data --networkid 42 --http --http.corsdomain "*" --nodiscover --http.api="db,eth,net,web3,personal" --http.port 8545 --dev --dev.period 1 console
// geth --datadir data --networkid 42 --http --http.corsdomain "*" --nodiscover --http.api="db,eth,net,web3,personal" --http.port 7545 --allow-insecure-unlock --dev --dev.period 1 console