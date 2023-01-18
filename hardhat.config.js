require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config({path: './.env'})

/** @type import('hardhat/config').HardhatUserConfig */

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

module.exports = {
  solidity: { 
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.8.17",
      },
      {
        version: "0.6.7",
        settings: {},
      },
    ],
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY            
    }
  },
  networks: {

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY]
    }
  }
};
