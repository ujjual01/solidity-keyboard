async function main() {
    const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
    const keyboardsContract = await keyboardsContractFactory.deploy();
    await keyboardsContract.deployed();

    console.log("The keyboards contract is deployed!",keyboardsContract.address)

    const keyboard = await keyboardsContract.getKeyboards();
    console.log("We got the keyboards!",keyboard);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });