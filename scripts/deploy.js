//todo
const {ethers} = require('hardhat')


async function main(){
    const estate = await ethers.getContractFactory('estateRegistration')
    const estates= await estate.deploy()
    console.log("deploying ......")
    await estates.deployed()
    console.log(`Deployed at ${estates.address}`)

//0xd7A3BAC0E7722751ed55670F42649b985E3fc981
}

//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })