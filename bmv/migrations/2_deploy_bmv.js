const BtpMessageVerifier = artifacts.require('BtpMessageVerifier');
require('dotenv').config({ path: '../.env' });

let {
    BMC_ADDR,
    SRC_NETWORK_ID,
    NETWORK_TYPE_ID,
    FIRST_BLOCK_UPDATE,
    SEQUENCE_OFFSET
} = process.env;

module.exports = async function (deployer, network, accounts) {
    if (network === 'development') {
        BMC_ADDR = accounts[0];
        SRC_NETWORK_ID = 'btp://0x2.icon';
        NETWORK_TYPE_ID=2;
        FIRST_BLOCK_UPDATE="0xf8a40a00a08d647190ed786d4f8a522f32351ff2269732f6e3771b908271ca29aa73c2c03cc00201f80001a041791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7ab858f856f85494e3aee81071e40c44dde872e568d8d09429c5970e94b3d988f28443446c9d7ac62f673085e2736ca4e094f7646979981a5d7dcc05ea261ae26ecd2c2c81889477fec3da1ba8b192f4b278057395a5124392c88b"
        SEQUENCE_OFFSET=0
    }

    deployer.deploy(BtpMessageVerifier,
        // constructor args
        BMC_ADDR,
        SRC_NETWORK_ID,
        NETWORK_TYPE_ID,
        FIRST_BLOCK_UPDATE,
        SEQUENCE_OFFSET,
        0
    );
};
