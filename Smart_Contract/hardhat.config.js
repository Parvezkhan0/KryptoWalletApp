// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
// require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    ropsten: {
      url: "https://eth-sepolia.g.alchemy.com/v2/9IjH7GAt_kKIqxPVTkPhK2Todw2vh9de",
      accounts: ["72dda71b57bf9a4076a6e0e8924e83d33a1668146fdd63f00fa8a5ee71c51f44"]
    }
  }
};
