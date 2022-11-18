const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("SimpleNFT");
  const deployedContract = await contract.deploy();

  await deployedContract.deployed();

  console.log("SimpleNFT deployed to:", deployedContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });