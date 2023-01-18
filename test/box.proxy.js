const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");

describe("box proxy contract unit test", function() {
    let box;
    before(async function(){
        // const [deployer, tradeOperator, user1, user2, user3] = await ethers.getSigners();
        // deploy contract
        //const TransferProxy = await ethers.getContractFactory("contracts/TransferProxyV3.sol:TransferProxyV3");

        // deploy proxyAdmin, Box Contract, TransparentUpgradeableProxy
        const Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [20], {initializer: 'updateValue'});  
        await box.deployed();
        console.log("Box deployed to:", box.address);

    })

    this.beforeEach(async function(){
        //
    })

    it("retrive a value", async function(){
        expect(await box.getValue()).to.equal(20)
    })

    it("set value", async function(){
        const [user1] = await ethers.getSigners();
        await box.connect(user1).updateValue(40);
        expect(await box.getValue()).to.equal(40);
    })

})
