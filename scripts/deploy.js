const { ethers, upgrades } = require("hardhat");

// https://goerli.etherscan.io/address/0x44988A1Db4F87395231E9bb806Dd30985D9f6ee7#code
async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [42], {initializer: 'updateValue'});
  await box.deployed();
  console.log("Box Proxy deployed to:", box.address);
} 

main()
.then(()=> process.exit(0))
.catch(error => {
  console.log(error);
  process.exit(1);
})