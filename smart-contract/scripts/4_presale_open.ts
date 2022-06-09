import { utils } from 'ethers';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  const contract = await NftContractProvider.getContract();

  const preSalePrice = utils.parseEther(CollectionConfig.preSale.price.toString());
  if (!await (await contract.cost()).eq(preSalePrice)) {
    console.log(`Updating the token price to ${CollectionConfig.preSale.price} ETH...`);

    await (await contract.setCost(preSalePrice)).wait();
  }

  if (!await (await contract.maxMintAmountPerTx()).eq(CollectionConfig.preSale.maxMintAmountPerTx)) {
    console.log(`Updating the max mint amount per TX to ${CollectionConfig.preSale.maxMintAmountPerTx}...`);

    await (await contract.setMaxMintAmountPerTx(CollectionConfig.preSale.maxMintAmountPerTx)).wait();
  }
  
  if (await contract.paused()) {
    console.log('Unpausing the contract...');

    await (await contract.setPaused(false)).wait();
  }

  console.log('Pre-sale is now open!');
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
