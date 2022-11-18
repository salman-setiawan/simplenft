require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.APP_RPC_URL,
      accounts: [process.env.APP_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.APP_ETHERSCAN_KEY,
  },
};
