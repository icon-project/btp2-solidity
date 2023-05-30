const hre = require("hardhat");
const accounts =  hre.userConfig.networks.hardhat.accounts.map((v) => {
    return {secretKey: v.privateKey, balance: v.balance}
})

module.exports = {
    istanbulFolder: 'build/hardhat/coverage',
    istanbulReporter: ['html','text'],
    providerOptions: {
        // default_balance_ether: 100,
        accounts: accounts
    },
    skipFiles: [
        // "BMCManagement.sol",
        // "BMCPeriphery.sol",
        // "BMCService.sol",
        "interfaces/IBMCManagement.sol",
        "interfaces/IBMCPeriphery.sol",
        "interfaces/ICCManagement.sol",
        "interfaces/ICCPeriphery.sol",
        "interfaces/ICCService.sol",
        "interfaces/IOwnerManager.sol",
        // "libraries/Errors.sol",
        // "libraries/RLPDecodeStruct.sol",
        // "libraries/RLPEncodeStruct.sol",
        // "libraries/Types.sol",
        // "libraries/Utils.sol",
        "test/BMCManagementV2.sol",
        "test/BMCPeripheryV2.sol",
        "test/BMCServiceV2.sol",
        "test/LibRLPStruct.sol"
    ],
    mocha: {
        timeout: 600000
    }
};
