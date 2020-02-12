# HW2 - Development Tools Installation Guides + Demos

Written by Haena Lee

Hello! Welcome to Homework 2 of the Blockchain for Developer DeCal. This week, we will be installing all of the necessary developer tools that you will need in your journey of developing on top of blockchains, and walking through demos that will help you become familiar with using these tools. This homework will be divided into two primary sections:

* Installation Guides

* Metamask and Remix IDE Demo

Let's go! 

## Part 1: Installation

**Prerequisites**
Before we install our necessary blockchain developer tools, please make sure you have these tools installed.

<u>Homebrew (MacOS)</u>
If you use MacOS, please install Homebrew, as it will make installation much more convenient later on both in this assignment and in future lectures. In order to install Homebrew, please follow the instructions on the [Homebrew website](https://brew.sh/).



### Node.js and NPM

#### MacOS
As Truffle and Ganache are built by Node.js, you will need the NPM package manager to install them. 
If you use MacOS, you can install Node.js and NPM by using Homebrew. In your terminal, please enter `brew install node` and it should download both Node.js and NPM at the same time. 
Alternatively, you can go to [nodejs.org/en/download/](https://nodejs.org/en/download/) and download the appropriate version there.

To check if you've successfully installed Node.js, you can enter this command in your terminal: `node -v`

To check if you've successfully installed NPM, you can enter this command in your terminal: `npm -v`
Both of these commands should return the version number of the Node.js and NPM you've just installed on your computer.

#### Windows

If you are on Windows, you will have to go to [nodejs.org/en/download/](https://nodejs.org/en/download/) and download the appropriate version for your device there. 
Again, to check if you've successfully installed Node.js, you can enter this command in a command prompt or PowerShell: `node -v`
To check if you've successfully installed NPM, you can enter this command: `npm -v`



### Developer Tools

#### Metamask

Installing [Metamask](https://metamask.io/) is a fairly simple task. Open a Google Chrome browser and go to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions). Simply search up `Metamask` and add the extension to your browser.

#### Truffle

Now that you have NPM installed, simply enter `npm install -g truffle` in your terminal or command prompt.

#### Ganache

Enter `npm install -g ganache-cli` in your terminal/command prompt.
And you're done! You will not need to install [Remix IDE](https://remix.ethereum.org/) as it is online.



## Part 2: Metamask and Remix IDE Demo

### Preparation
In the second part of the homework, we will be recreating the demo of Metamask and Remix IDE in lecture, but we will also have you send fake ether to a fellow classmate. 

First, create an account in Metamask. Please follow the process that Metamask requires to set it up in your browser. You are free to name your account whatever you want, but please keep in mind this is still a classroom environment. We will instead use your addresses as markers of identity. Please make sure that you are on the Ropsten Test Network, as we don't want to be sending actual ether. 
After creating your account, please go to [faucet.ropsten.be](https://faucet.ropsten.be/) and paste your account's address into the box. This faucet will give your account some amount of fake ether.

Similarly, you can choose another Test Network, such as Rinkeby Test Netwrok and use [this link](https://faucet.rinkeby.io/) to get some fake ether.

Additionally, please make sure that you have the file `omkarbank.sol`. It is in the same folder of this instruction on the course GitHub. This will be the smart contract that we use today. This smart contract simulates a very simple banking account, giving us the ability to deposit, withdraw, or check the balance of the account. 

### Demo 1: Lecture Demo

Once you've opened up the smart contract code, please make sure that you have the compiler set to a version that can run the code. 
By default, the `Deploy and Run Transactions` tab should look like this. However, we want to be able to deploy the contract on our Metamask account. In order to do that, several steps must be taken:

* Compile the smart contract
* Change the environment to `Injected Web3`, so that we can allow Remix IDE to interact with our Metamask account.
* Make sure our `Account` corresponds with the correct address.

Once we click `Deploy`, we should be able to interact with the smart contract with our Metamask account. A drop-down list should appear below the `Deployed Contracts` header. There should be a box labeled `SimpleBank at (some hash)`. This hash represents the account that the smart contract is in. Yay! Please make sure that the smart contract account is able to interact with your own Metamask account. We will be able to check if you have done so through your transaction history.

**Tip**: For the purpose of this demo, we recommend you disable all modules except for `Deploy and run transactions` and `Solidity Compiler` in the `Plugin Manager`. It is known to us sometimes the security analysis tool that come with modules in Remix IDE will not let this sample contract run. Please note that we are doing this only for the sake of this demo; it is usually good security practice to check what the analysis tool alerts us about the potential vulnerabilities. Another note is that since starting from this homework, we start using accounts, please do not post your account information in public (for example on public GitHub repos). 



### Demo 2: Sending Ether to a Friend

Now, we want to be able to send fake ether to another Metamask account. The process for doing so will be slightly different, but very similar as well. 

Find a partner in the room and exchange addresses with them. Enter your partner’s address in `At Address` box. This should create another box in the `Deployed Contracts` section. Make sure that this box contains your partner’s hash. Now click on `deposit` in the new box that was just created. This should initiate a transaction in which you deposit 0ETH to your partner’s address. 

Your check-off will be to show one of the instructors that you have made a transaction with your partner’s address. Congratulations! This will be all for Homework 2.