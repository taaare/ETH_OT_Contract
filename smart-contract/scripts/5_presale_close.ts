import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  const contract = await NftContractProvider.getContract();
  
  if (!await contract.paused()) {
    console.log('Pausing the contract...');

    await (await contract.setPaused(true)).wait();
  }

  console.log('Pre-sale is now closed!');
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
