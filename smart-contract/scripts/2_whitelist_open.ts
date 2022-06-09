import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  if (CollectionConfig.whitelistAddresses.length < 1) {
    throw '\x1b[31merror\x1b[0m ' + 'The whitelist is empty, please add some addresses to the configuration.';
  }

  const leafNodes = CollectionConfig.whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = '0x' + merkleTree.getRoot().toString('hex');

  const contract = await NftContractProvider.getContract();

  const whitelistPrice = utils.parseEther(CollectionConfig.whitelistSale.price.toString());
  if (!await (await contract.cost()).eq(whitelistPrice)) {
    console.log(`Updating the token price to ${CollectionConfig.whitelistSale.price} ETH...`);

    await (await contract.setCost(whitelistPrice)).wait();
  }

  if (!await (await contract.maxMintAmountPerTx()).eq(CollectionConfig.whitelistSale.maxMintAmountPerTx)) {
    console.log(`Updating the max mint amount per TX to ${CollectionConfig.whitelistSale.maxMintAmountPerTx}...`);

    await (await contract.setMaxMintAmountPerTx(CollectionConfig.whitelistSale.maxMintAmountPerTx)).wait();
  }

  if ((await contract.merkleRoot()) !== rootHash) {
    console.log(`Updating the root hash to: ${rootHash}`);

    await (await contract.setMerkleRoot(rootHash)).wait();
  }
  
  if (!await contract.whitelistMintEnabled()) {
    console.log('Enabling whitelist sale...');

    await (await contract.setWhitelistMintEnabled(true)).wait();
  }

  console.log('Whitelist sale has been enabled!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
