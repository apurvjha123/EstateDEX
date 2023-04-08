const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe('estateRegistration',()=>{

    let estate,estates;
    beforeEach(async function (){
        estate = await ethers.getContractFactory("estateRegistration");
        estates = await estate.deploy();
    })

    it("Should be Equal",async function (){
        const government = await estates.government();
        const escrowAgent = await estates.escrowAgent();
        assert.equal(government,escrowAgent)
    })
})