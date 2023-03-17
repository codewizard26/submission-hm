const Cryptowiz = artifacts.require("Cryptowiz.sol");
module.exports = function(deployer){
    deployer.deploy(Cryptowiz);
};