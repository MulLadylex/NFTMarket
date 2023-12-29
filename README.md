# Overview
 A simple decentralized application that performs buying and selling of a particular NFT.

# Environment
Smart Contract:
    - hardhat@2.19.0
    - solidity^0.8.20
    - remix-ide
    - 
```
NFTmarket
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ main
│  ├─ objects
│  │  ├─ 16
│  │  │  └─ b54da6d21fcc4d4d4eaa4b968a5f5a7fda8cd8
│  │  ├─ 66
│  │  │  └─ 3bb37ce7d1f8fadcb39ab6fc4398fff93b5d1f
│  │  ├─ aa
│  │  │  └─ 8ba9e211e08054f6f238e115953ada4b593358
│  │  ├─ df
│  │  │  └─ e0770424b2a19faf507a501ebfc23be8f54e7b
│  │  ├─ e2
│  │  │  └─ 0b431bcb69267acc39eaf8fdb94c30f40e3223
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     └─ tags
├─ .gitattributes
├─ .gitignore
├─ app.js
├─ contracts
│  ├─ erc20_usdt.sol
│  ├─ erc721_nft.sol
│  └─ ntf_market.sol
├─ files
├─ hardhat.config.js
├─ ipfs-upload.js
├─ LICENSE
├─ nft-minter.js
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ abi
│  │  ├─ NFTM.json
│  │  ├─ NFTMarket.json
│  │  └─ USDT.json
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ HomePage.js
│  │  ├─ Navbar.js
│  │  ├─ NFTCard.js
│  │  ├─ NFTDetails.js
│  │  ├─ OwnedNFTs.js
│  │  ├─ UploadImage.js
│  │  └─ UploadSuccess.js
│  ├─ config.js
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  ├─ styles
│  │  ├─ ImageDetails.css
│  │  ├─ Navbar.css
│  │  ├─ NFTCard.css
│  │  ├─ ownedCard.css
│  │  ├─ UploadImage.css
│  │  └─ UploadSuccess.css
│  └─ utils
│     ├─ market.js
│     ├─ nft.js
│     └─ usdt.js
└─ test
   └─ market.js

```