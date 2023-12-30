# Overview
 A simple decentralized application that performs buying and selling of a particular NFT. This application is separated from the front and back ends. You can test and modify it on your local side.

> The application is currently in the testing phase and has not been deployed on the Ethereum network.
# Environment
Smart Contract:  
- hardhat@2.19.3  
- solidity^0.8.20  
- remix-ide  

Backend:   
- pnpm^8.13.1
- kubo-rpc-client^3.0.2
- express@4.18.2

Frontend:
- react@18.2.0
- ethers@6.9.1

## Project Structure
```
NFTmarket
├─ app.js
├─ contracts                # 主要合约
│  ├─ erc20_usdt.sol
│  ├─ erc721_nft.sol
│  └─ ntf_market.sol
├─ files                    # 暂存上传的图片
├─ hardhat.config.js
├─ ipfs-upload.js           # 上传图片到ipfs
├─ nft-minter.js            # 发放NFT
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ public                   # 以下为前端内容
│  └─ index.html
├─ src
│  ├─ abi                   # 前端需要的合约abi
│  │  ├─ NFTM.json
│  │  ├─ NFTMarket.json
│  │  └─ USDT.json
│  ├─ App.css
│  ├─ App.js                # 前端主要逻辑
│  ├─ components            # 前端组件
│  │  ├─ HomePage.js
│  │  ├─ Navbar.js
│  │  ├─ NFTCard.js
│  │  ├─ NFTDetails.js
│  │  ├─ OwnedNFTs.js
│  │  ├─ UploadImage.js
│  │  └─ UploadSuccess.js
│  ├─ config.js             # 前端配置
│  ├─ styles                # 前端样式
│  │  ├─ ImageDetails.css
│  │  ├─ Navbar.css
│  │  ├─ NFTCard.css
│  │  ├─ ownedCard.css
│  │  ├─ UploadImage.css
│  │  └─ UploadSuccess.css
│  └─ utils                 # 前端工具
│     ├─ market.js
│     ├─ nft.js
│     └─ usdt.js
├─ test                     # 测试
│  └─ market.js
└─ README.md

```

# How to run
After cloning the repository, run the following commands to install the dependencies:

## Prerequisites
```bash
npm install
```

## Deploy the contract
You can deploy the contract on the hardhat network on your local side, and then modify the contract address in the frontend configuration file ('/src/config.js') also in the backend configuration file. ('.env')
```bash
npm run prestart
```

## Run the backend
```bash
npm run serve
```

## Run the frontend
```bash
npm run start
```