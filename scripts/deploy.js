const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");


// https://goerli.etherscan.io/address/0x44988A1Db4F87395231E9bb806Dd30985D9f6ee7#code
async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [42], {initializer: 'updateValue'});
  await box.deployed();
  console.log("Box: Upgradable-Proxy deployed to:", box.address);
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(box.address)
  await hre.run("verify:verify",{
    address: implementationAddress, 
    constructorArguments: []
  })
  console.log(implementationAddress," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(box.address)," getAdminAddress")  
} 

main()
.then(()=> process.exit(0))
.catch(error => {
  console.log(error);
  process.exit(1);
})