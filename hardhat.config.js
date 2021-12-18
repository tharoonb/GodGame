const { randomBytes } = require("@ethersproject/random");

require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/iExNDawOnqHH63N9c0-2_o3NKqMUNAbU",
      accounts: [privateKey],
    },
    metis: {
      url: "https://stardust.metis.io/?owner=588",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.9",
};
