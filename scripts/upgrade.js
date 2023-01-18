const { ethers, upgrades } = require("hardhat");
// box proxy contract address

// https://goerli.etherscan.io/address/0x6979744F6075743B2160c982517b1B5b5526a3C0#code
const BOX_PROXY_ADD = "0xAD4e498224BA217726a7E6968Ba1F3BB62e5BAd7"
async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(BOX_PROXY_ADD, BoxV2);
  await box.deployed();
  console.log("Box Proxy Upgraded to:", box.address);
} 


main()
.then(()=> process.exit(0))
.catch(error => {
  console.log(error);
  process.exit(1);
})