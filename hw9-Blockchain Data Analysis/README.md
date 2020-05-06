# HW9 - Blockchain Data Analysis in Python

Python notebook that walks through an exploratory data analysis of Ethereum transactions and performs some basic network analysis operations. 

Created by Daniel Rincon (Blockchain at Berkeley). Edited by Grace Kull and Simon Zirui Guo.

### About 

This notebook is meant to be a short introduction to Blockchain data analysis. You will explore a dataset on-chain transactions between Ethereum miners and conduct the following actions:

- Pre-process data 
- Calculate and visualize descriptive statistics
- Create a graph object
- Calculate basic graph metrics
- Perform graph visualization




### Getting Started

Make sure you have `Python 3` and `Jupyter Notebook` installed.

If you are missing packages, please use `pip` to install them.

Please install `numpy`, `pandas`, `scipy`, `matplotlib`, `networkx` by running the following commands: 

```
pip install numpy
pip install pandas
pip install spicy
pip install matplotlib
pip install networkx
```

You should be able to open the Jupyter notebook from terminal by typing `jupyter notebook` in the `hw9` directory.



### Download Relevant Data

Since the mining data files are pretty large, we did not put it in the GitHub Repo.

**Please download and unzip the data** from [here](https://drive.google.com/a/berkeley.edu/file/d/1xUEx499ehXSttSO5sPUVImBxOOWiRe_C/view?usp=sharing) and place the unzipped `data` folder in the same directory as your python notebook.

By doing the above two steps, you should be able to run everything in the notebook. 

Let us know if you run into any issues. 



### Homework

We understand many of you have not worked with these libraries so it might be quite challenging to write code using them. Thus, we have given you all the code necessary to walkthrough the notebook.

Instead, the homework will be more focused on the conceptual aspects. We really want you to think about what all these data analytics in the context of blockchain data can tell us about the network. To complete the homework:

**Step I**

Run through the entire notebook. Try to understand what roughly each block of code is doing while executing them. Read the description block above the code and compare that to the result you get. **Finally, get a screenshot** of the transaction graph you generate at the end of Part 4.

**Step II**

Answer the following questions. They can also be found in the notebook which will provide you a better context.

1. [In Part 1] Give one reason that explains why the growth rate in the number of blocks mined is different from the growth rate of the number of transactions mined.

   <u>Answer:</u>  Because at the beginning of the network the capacity of the blocks was not fully utilized.

2. [In Part 2] What is the 'public' name of the miner (mining operation) found in the previous question? (**hint**: Use the miners address and look it up in your favorite block explorer, eg. [Etherscan](https://etherscan.io/)) 

   <u>Answer:</u> DwarfPool1

3. [In Part 5] What is the relationship between the two values calculated above? 

   <u>Answer:</u> The two quantities are the same because every outward edge of a node is counted as an inward edge of another node.

4. [In Part 5] How do you interpret the number above? 

   <u>Answer:</u> means that the graph has 0.02% of the total number of edges it could have if it were a complete graph.

   

### Tips

We suggest you review the slides, especially the part about graphs. The video walk through of the homework by Daniel could be quite helpful too with some hints he gave along the way.

For conceptual questions regarding graphs, please refer to the [Blockchain Fundamental DeCal](https://blockchain.berkeley.edu/courses/spring-2020-fundamentals-decal/) and check out the lecture on `Bitcoin IRL: Wallets, Mining, and More`.



### Check Off

Submit your screenshot of the transaction graph the answers to the questions listed above (also can be find in the notebooks for better context) through this [form](https://forms.gle/Dt7cceHuFWnGDnaL8). 
