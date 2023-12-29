const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Market", function () {
    let usdt, nft, market, account1, account2;

    beforeEach(async () => {
        [account1, account2] = await ethers.getSigners();

        const USDT = await ethers.getContractFactory("USDT");
        usdt = await USDT.deploy();
        const NFT = await ethers.getContractFactory("NFTM");
        nft = await NFT.deploy();
        const Market = await ethers.getContractFactory("NFTMarket");
        market = await Market.deploy(usdt.target, nft.target);

        await nft.safeMint(account2.address, 'http://sample.com/0');    //tokenId = 0
        await nft.safeMint(account2.address, 'http://sample.com/1');    //tokenId = 1
        await usdt.approve(market.target, "1000000000000000000");
        await nft.connect(account2).setApprovalForAll(account1.address, true);

        const price = 
        "0x0000000000000000000000000000000000000000000000000001c6bf52634000";

        expect(await nft.connect(account2)['safeTransferFrom(address,address,uint256,bytes)'](account2.address, market.target, 0, price)).to.emit(market, "NewOrder");
        expect(await nft.connect(account2)['safeTransferFrom(address,address,uint256,bytes)'](account2.address, market.target, 1, price)).to.emit(market, "NewOrder");
        expect(await nft.balanceOf(account2.address)).to.equal(0);
        expect(await nft.balanceOf(market.target)).to.equal(2);
        expect(await market.isListed(0)).to.equal(true);
        expect(await market.isListed(1)).to.equal(true);

        expect((await market.getAllNFTs())[0][0]).to.equal(account2.address);
        expect((await market.getAllNFTs())[0][1]).to.equal(0);
        expect((await market.getAllNFTs())[0][2]).to.equal(500000000000000);
        expect((await market.getAllNFTs())[1][0]).to.equal(account2.address);
        expect((await market.getAllNFTs())[1][1]).to.equal(1);
        expect((await market.getAllNFTs())[1][2]).to.equal(500000000000000);
        expect(await market.getOrderLength()).to.equal(2);
    });

    it("Market`s erc20 address should be usdt", async function () {
        expect(await market.erc20()).to.equal(usdt.target);
    });

    it("Market`s erc721 address should be nft", async function () {
        expect(await market.erc721()).to.equal(nft.target);
    });

    it("account2 should have 2 nfts", async function () {
        expect(await nft.totalSupply()).to.equal(2);
        expect(await nft.tokenByIndex(0)).to.equal(0);
        expect(await nft.tokenByIndex(1)).to.equal(1);
        expect((await market.OrderOfId(0))[0]).to.equal(account2.address);
        expect((await market.OrderOfId(1))[0]).to.equal(account2.address);
    });

    it("account1 should have usdt", async function () {
        expect(await usdt.balanceOf(account1.address)).to.equal("100000000000000000000000000");
    });

    it("account1 should have no nfts", async function () {
        expect(await nft.balanceOf(account1.address)).to.equal(0);
    });

    // 上架
    it("account2 can list 1 nfts", async function () {        
        await nft.safeMint(account2.address, 'http://sample.com/2');    //tokenId = 2
        expect(await nft.balanceOf(account2.address)).to.equal(1);
        expect(await nft.tokenOfOwnerByIndex(account2.address, 0)).to.equal(2);
        expect(await nft.tokenURI(2)).to.equal('http://sample.com/2');
        expect(await market.isListed(2)).to.equal(false);

        expect(await nft.connect(account2).approve(account1.address, 2)).to.emit(nft, "Approval");
        expect(await nft.getApproved(2)).to.equal(account1.address);
        expect(await nft.safeTransferFrom(account2, account1, 2)).to.emit(nft, "Transfer");
        const price =
        "0x0000000000000000000000000000000000000000000000000000000000001000";
        expect(await nft['safeTransferFrom(address,address,uint256,bytes)'](account1.address, market.target, 2, price)).to.emit(market, "NewOrder");
        expect(await nft.balanceOf(account2.address)).to.equal(0);
        expect(await nft.balanceOf(market.target)).to.equal(3);
        expect(await market.isListed(2)).to.equal(true);
        expect(await market.getOrderLength()).to.equal(3);
        expect(await nft.ownerOf(2)).to.equal(market.target);

        const order = await market.getMyNFTs();
        expect(order[0][0]).to.equal(account1.address);
        expect(order[0][1]).to.equal(2);
        expect(order[0][2]).to.equal("4096");
    });
    
    // 取消
    it("account2 can unlist one nft", async function () {
        expect(await market.connect(account2).cancelOrder(1)).to.emit(market, "CancelOrder");
        expect(await market.getOrderLength()).to.equal(1);
        expect(await market.isListed(1)).to.equal(false);
    });    
    
    // 改价
    it("account2 can change price", async function () {
        expect(await market.isListed(0)).to.equal(true);
        expect(await market.connect(account2).changePrice(0, "1000000000000000")).to.emit(market, "ChangePrice");
    });
    
    // 购买
    it("account1 can buy nft from market", async function () {
        expect(await market.buy(0, 500000000000000)).to.emit(market, "Deal");
        expect(await nft.balanceOf(account1.address)).to.equal(1);
        expect(await nft.balanceOf(market.target)).to.equal(1);
        expect(await market.isListed(0)).to.equal(false);
    });
});
