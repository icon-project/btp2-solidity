const hre = require("hardhat");
const accounts =  hre.userConfig.networks.hardhat.accounts.map((v) => {
    return {secretKey: v.privateKey, balance: v.balance}
})

module.exports = {
    istanbulFolder: 'build/hardhat/coverage',
    istanbulReporter: ['html','text'],
    providerOptions: {
        // default_balance_ether: 1000,
        accounts: accounts
    },
    skipFiles: [
        // "BMV.sol",
        // "libraries/Errors.sol",
        // "libraries/RLPDecodeStruct.sol",
        // "libraries/Types.sol",
        "test/LibRLPStruct.sol"
    ],
    mocha: {
        timeout: 600000
    }
};
