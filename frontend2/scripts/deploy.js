const hre = require("hardhat");
//const { ethers } = require("hardhat");


async function main() {

    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Tracking = await hre.ethers.getContractFactory("Tracking");
    const tracking = await Tracking.deploy();

    //await tracking.deployed();
    //await tracking.deployTransaction.wait();

    //console.log(`Tracking deployed to: ${tracking.address}`);
    //console.log("Contract deployed to:", tracking.address);
    //console.log(`Tracking deployed to ${tracking.target}`);
    //console.log(Tracking deployed to ${tracking.address});
    //console.log(`deployer deployed to ${deployer.target}`);
    console.log(`Tracking  deployed to: ${ tracking.target}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});  

 