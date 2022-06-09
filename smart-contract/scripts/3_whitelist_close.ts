import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  const contract = await NftContractProvider.getContract();
  
  if (await contract.whitelistMintEnabled()) {
    console.log('Disabling whitelist sale...');

    await (await contract.setWhitelistMintEnabled(false)).wait();
  }

  console.log('Whitelist sale has been disabled!');
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
