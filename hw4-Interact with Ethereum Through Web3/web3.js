// Commands for you to execute in interactive node window
// If you want, you can also deploy it in a simple web app
const Web3 = require('web3')
// Get the endpoint under the correct test net in Infura
var web3 = new Web3(new Web3.providers.HttpProvider("{Your Infura Endpoint}"));
// Get your contract's deployed address, access that through the link in Remix console.
const address = "Your Contract Address";
// Your contract's ABI, from Remix IDE
const ABI = "{Your contract's ABI info}";

// Get properties regarding the function calls
web3.eth.getBalance
// Specify your contract
const myContract = new web3.eth.Contract(ABI, address)
// Async call to get the contract's balance, interacting with the contract
myContract.methods.balance().call().then(console.log)
