import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  contractName: 'OrbitTechFullTest',
  tokenName: 'Particle Accelerator',
  tokenSymbol: 'ORBIT',
  hiddenMetadataUri: 'ipfs://QmbnGdBS354HhCBzZV62rg8qgCiqxFofSqd8PAJrmX39BP/1.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.2,
    maxMintAmountPerTx: 1,
  },
  contractAddress: 'null',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
