import { expect } from "chai";

describe("MyContract", () => {
    it("should return the initial name", async () => {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("John");
        expect(await myContract.getName()).to.equal("John");
    });
    it("should change the name", async () => {
        const MyContract = await ethers.getContractFactory("MyContract");
        const myContract = await MyContract.deploy("John");
        await myContract.changeName("Jane");
        expect(await myContract.getName()).to.equal("Jane");
    });
});

