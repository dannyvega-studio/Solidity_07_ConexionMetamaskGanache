var CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = function(deployer) {
    deployer.deploy(
        CrowdFundingWithDeadline,
        "Test Campaign",
        1,
        200,
        "0x3d3c1c79437F319ba85d7c96ab1b0DFD3974db8e"
    )
};