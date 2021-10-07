const TanganyERC20 = artifacts.require("./TanganyERC20.sol");
const TanganyERC721 = artifacts.require("./TanganyERC721.sol");
const Emitter = artifacts.require("Emitter");
const TanganyLoveToken = artifacts.require("TanganyLoveToken");
const Payments = artifacts.require("Payments");
const Caller = artifacts.require("Caller");

module.exports = function (deployer) {
    /**
     * add the desired contracts to the next lines
     */
    deployer.deploy(TanganyERC20);
    // deployer.deploy(TanganyERC721);
    // deployer.deploy(TanganyLoveToken);
    // deployer.deploy(Payments);
    // deployer.deploy(Emitter);
    // deployer.deploy(Caller);
};
