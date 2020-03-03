# HW4 Interact with Ethereum Contract through Web3
By Minxing Chen, Simon Zirui Guo, Grace Kull

## Set Up
1. Make sure you have `node.js` and `npm` installed. If you have not, reference HW2 for instructions.
2. Clone this repo or create your own by `npm init`.
3. Install dependencies, particularly the npm package [`web3`](https://www.npmjs.com/package/web3). If you cloned this repo, simply do `npm install`. If using your own node app directory, use `npm install web3`.
4. Register an [Infura](https://infura.io/ ) account and start a new project. Change the endpoint to the appropriate test net that you are testing with and copy that.
5. Deploy `omkarbank.sol` from hw2 in remix. Make sure you are under `Injected Web3` setting when deployed. Copy the appropriate `ABI` info and the contract address.
   
## Interact with Web 3
Edit your commands in `web3.js` with the appropriate endpoint, address, and ABI info of your contract and account.

Go to terminal and navigate to the directory. Start an interactive node session by typing `node`.

Now type in the commands in `web3.js` file one by one in your interactive node session. 
More detail can be find in the comments of the file.

## Check off
At the end of session, you should able to get the account balance of the `OmkarBank` contract. Guess what, it is `0`! 
If you look closely to the contract code, it initializes the account balance to be 0.

Show us that you successfully interacted with the smart contract and get the balance data, which is `0`.