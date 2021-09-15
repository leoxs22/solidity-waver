
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const waveContractFactory = await ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({value: ethers.utils.parseEther("0.0001")});
    await waveContract.deployed();

    console.log("WavePortal address:", waveContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(error);
        process.exit(1);
    })