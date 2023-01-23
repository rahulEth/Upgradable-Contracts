const { ethers, upgrades} = require("hardhat");
const hre = require("hardhat");
// box proxy contract address

// https://goerli.etherscan.io/address/0x6979744F6075743B2160c982517b1B5b5526a3C0#code
const BOX_PROXY_ADD = "0xc430b302b1b7c95563a28277e93f3869791d5Ff3"
async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(BOX_PROXY_ADD, BoxV2);
  await box.deployed();
  console.log("Box Upgradable-Proxy: ", box.address);
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(box.address)
  const implementationAddressVerify = await hre.run("verify:verify",{
    address: implementationAddress, 
    constructorArguments: []
  })
  console.log(implementationAddressVerify, " implementationAddressVerify")
  console.log(implementationAddress," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(box.address)," getAdminAddress")  

} 


main()
.then(()=> process.exit(0))
.catch(error => {
  console.log(error);
  process.exit(1);
})