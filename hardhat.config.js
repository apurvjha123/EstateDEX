require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const url = process.env.sepolia_url
const account1 = process.env.account1
const account2 = process.env.account2

module.exports = {
  solidity: "0.8.18",
  defaultNetwork:"hardhat",
  networks:{
    sepolia:{
        url:url,
        accounts:[account1,account2],
        chainId:11155111
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  }
};
