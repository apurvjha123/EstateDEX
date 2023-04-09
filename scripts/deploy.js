//todo
const { ethers,run,network } = require("hardhat");

async function main() {
  const estate = await ethers.getContractFactory("estateRegistration");
  const estates = await estate.deploy();
  console.log("deploying ......");
  await estates.deployed();
  console.log(`Deployed at ${estates.address}`);
  // All the deployed contract on sepolia
  //0xd7A3BAC0E7722751ed55670F42649b985E3fc981
  //0x41290a159B1e4C67D086BDD015622a6a7914da69
  //0xf4023C04AFeC4502a9a9b5b6D2A1a5A6daA4Dbf0

  if (network.config.chainId === 11155111 && process.env.sepolia_url) {
    console.log("Waiting for block confirmations...");
    await estates.deployTransaction.wait(2);
    // await verify(estates.address, [])
  }

  const government = await estates.government();
  console.log(`the government address id : ${government}`)
  const escrowAgent = await estates.escrowAgent();
  console.log(`the escrowAgent address id : ${escrowAgent}`)

  const register = await estates.registerestate('Residence','ISM',35);
  console.log(register)
}

//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
