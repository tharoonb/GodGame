// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through node <script>.
//
// When running the script with npx hardhat run <script> you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using node you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  //deploy ERC20 WOLF Token, then Traits, Woolf and Barn in that order

  const FaithToken = await hre.ethers.getContractFactory("FAITH");
  const faithToken = await FaithToken.deploy();
  await faithToken.deployed();
  console.log("Faith Token deployed to:", faithToken.address);

  const Traits = await hre.ethers.getContractFactory("Traits");
  const traits = await Traits.deploy();
  await traits.deployed();
  console.log("Traits deployed to:", traits.address);

  const God = await hre.ethers.getContractFactory("God");
  //need to pass wool token address, traits address and max token
  const god = await God.deploy(
    faithToken.address,
    traits.address,
    10000000000000
  );
  await god.deployed();
  console.log("God NFT deployed to:", god.address);

  const Temple = await hre.ethers.getContractFactory("Temple");
  //need to pass woolf and wool token addresses
  const temple = await Temple.deploy(god.address, faithToken.address);
  await temple.deployed();
  console.log("Temple deployed to:", temple.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
