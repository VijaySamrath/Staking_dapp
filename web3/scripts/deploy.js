const hre = require("hardhat");

async function main() {

  const tokenStaking = await hre.ethers.deployContract("TokenStaking");

  await tokenStaking.waitForDeployment();
  
// Token Contract
  const samrath = await hre.ethers.deployContract("Samrath");

  await samrath.waitForDeployment();

  console.log(` STACKING: ${tokenStaking.target}`);
  console.log(` TOKEN: ${samrath.target}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
