require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/-KIufFlTPfPGUPDQ0usp8tgaDLWFkDOU",
      accounts: [`80be44a011b470f70adff1ce2afc276c485ff2ef98ad70b8aaf042a0a0a03782`],
    }
  }
};

//0x6CE8B8d368884d2e926E8F66B8DB761c6A693F8D