## HW8 **Bitcoin Scripts and Lightning Network**

Written by Akash Khosla (Anchorage, Blockchain at Berkeley).



### Instructions

In lecture, we covered a high-level overview of **Bitcoin Scripting** and the **Lightning Network**.

For this week, we'll be taking a break from programming and will take some time to play with some demos and write on the design of these protocols.

To learn about the latest developments in Blockchain protocols, it is oftentimes important to listen to talks, read whitepapers, and blogposts. Here are a few resources I recommend to fortify your understanding of the components involved.

These are in recommended order. If you only pick one, do the first talk by Dan. If you're interested in more cross chain stuff, I recommend checking out Summa One's light client proofs, the Cosmos IBC protocol, Polkadot Network and Interledger.

* [HTLCs Considered Harmful by Dan Robinson](https://www.youtube.com/watch?v=qUAyW4pdooA)
* [An Illustrated Primer on Cross Currency Swaps in HTLCs by Jinglan Wang](https://medium.com/crypto-economics/an-illustrated-primer-on-cross-currency-swaps-in-htlcs-da90a90b60a9)
* [Interledger vs Lightning Network By Evan Schwartz](https://forum.interledger.org/t/whats-the-difference-between-interledger-and-lightning/133/2)
* [Visualizing HTLCs and the Lightning Network’s Dirty Little Secret](https://medium.com/@peter_r/visualizing-htlcs-and-the-lightning-networks-dirty-little-secret-cb9b5773a0)
* [Why HTLCs don't work for micropayments](https://bitcoin.stackexchange.com/questions/85650/htlcs-dont-work-for-micropayments/85694#85694)



**Check-off**

**

For this week's checkoff, watch or read **one or more** of the above talks or paper, and write a response regarding it **no less than 200 words and no more than 300 words**. 

Your response should have a short summary and your main takeaway. 

*The check-off form for this homework has been closed.*



### Resources

If you're interested in some optional reading, some stuff I left out was regarding SegWit (moving the signatures out of scriptSig and into another designated field called the witness), I recommend reading through this series of articles, which fills in the blanks on how Bitcoin transactions look now.

* [Types of Bitcoin Transactions - Part 1](https://blog.susanka.eu/types-of-bitcoin-transactions-part-i/)
* [Types of Bitcoin Transactions - Part 2](https://blog.susanka.eu/types-of-bitcoin-transactions-part-ii-segwit/)

If you want to learn what it takes to program a Bitcoin wallet, there's some great pages in here - as a challenge, try doing it in another language!: [Programming The Blockchain in C#](https://programmingblockchain.gitbook.io/programmingblockchain/)


If you want to tinker with a full node and hack away at the command line, this is also great for better understanding Bitcoin: [Learning Bitcoin from the Command Line](https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line)

I enjoy Mastering Bitcoin as well, but it's more of a reference. Read the section on [Advanced Transactions and Scripting](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch07.asciidoc)

If you manage to complete all of the above, congrats, you're in the <1% who know Bitcoin inside out!

Some extra food for thought:

- What’s the difference between a payment channel and HTLC?
- How does lightning combine payment channels and HTLC?