const Cryptowiz = artifacts.require("Cryptowiz");
module.exports = function(deployer){
    deployer.deploy(Cryptowiz);
};