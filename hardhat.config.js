require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork:"hardhat",
  networks:{
    sepolia:{
        url:'https://eth-sepolia.g.alchemy.com/v2/l05hKsyBQv2TUJw0U3unWyGZkQeFa_v3',
        accounts:["6ab56e49b7d4db6283207b336993b59482de5e9006f8bba236293baf4ab59ddb","16972ac14a79c0c606fa6a476075d070ffa8d0139caf37946c92c37dfe4d8457"],
        chainId:11155111
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  }
};
