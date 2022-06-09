
# Orbit Technologies ERC-721 Local Test Contract

ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique.


## Dependencies

Before deploying the contract, we need to ensure our dependencies are installed.

We will install dependencies using yarn, which comes installed with node.js 

However, we need to initialize yarn prior to utilization.
Check your node.js version using 
```bash 
node -v
```
Based on your version, use the corresponding command.

Node.js >= 16.10
```bash
  corepack enable
```
 Node.js < 16.10
```bash
 npm -i g corepack
```
 
  After initializaion, cd into "smart-contract" and run
  ```bash
  yarn
  ```
  Wait for the installation to complete, then cd into "minting-dapp" and run
  ```bash
  yarn
  ```
  
  You now have dependencies installed. (If you run into yarn access issues, run the command in sudo)

    
    
## .Env

To successfully deploy this contract, there are a few variables we need to set.

Navigate to the smart-contract folder, and locate the .env.example file. 

Right-click the file, and rename it to 
```
.env
```

Now let's fill it out.

First, we need to locate our Rinkeby URL & Private Key. Access your Infura account & copy your Rinkeby URL.



Paste the URL into 
```
NETWORK_RINKEBY_URL=https://rinkeby.infura.io/v3/abc123abc123abc123abc123abc123ab
```
and your Private Key into
```
NETWORK_RINKEBY_PRIVATE_KEY=0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1
```
Lastly, access your Etherscan account & copy your Etherscan API Key into
```
ETHERSCAN_API_KEY=ABC123ABC123ABC123ABC123ABC123ABC1
```
We have now completed our .env file & are ready to deploy to the Rinkeby test net.





 
## Deploy to Rinkeby

Please make sure you have Rinkeby test ETH prior to deployment!

Open two terminals, and cd into "smart-contract" &  "minting-dapp"

In the smart-contract terminal, change the contract name by running 
```bash
  yarn rename-contract OrbitTechnologiesTest
```

After renaming the contract, run the following command to deploy it.

```bash
  yarn deploy --network rinkeby
```

In the terminal you will notice a contract address.

Copy this and paste it into line 25 of smart-contract/config/CollectionConfig.ts

```bash
   contractAddress: 'PASTE HERE',
```

To verify the contract, enter the following command.

```bash
    yarn verify CONTRACTADDRESS --network rinkeby
```

Navigate to your other terminal (minting-dapp), and enter the following command.

```bash
  yarn dev-server
```
Open the local host website & connect your wallet.

Upon connecting, you will be greeted with information regarding the project.

## Presale

Now we will change the contract status. Navigate to your "smart-contract" terminal.


To open the presale, enter the following command
```
  yarn presale-open --network rinkeby
```
Presale is now open & you can mint an Orbit Technologies Particle Accelerator.

To close presale, enter the following command
```
yarn presale-close --network rinkeby
```
## Whitelist
For whitelisting, you need to add the wallet address to the smart-contract/config/whitelist.json file.

Then run the following command to open the whitelist sale.
```
yarn whitelist-open --network rinkeby 
```

To close the whitelist, enter the following command.
```
yarn whitelist-close --network rinkeby
```
## Public sale
Public sale is identical to presale. Utililze the following commands to open/close public sale.
```
yarn public-sale-open --network rinkeby
yarn public-sale-close --network rinkeby
```
## Revealing Metadata

Now that we have minted test Particle Accelerators, we want to see them!

In the smart-contract terminal, enter the following command
```
yarn reveal --network rinkeby
```

 Navigate to https://testnets.opensea.io/account and refresh the metadata to see your newly minted Particle Accelerators reveal themselves!

 