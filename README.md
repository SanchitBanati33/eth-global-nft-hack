# Description

## The Problem Statement

We all have to agree Discord is one of the most centralized entities we have in the space and if we truly want decentralization and true ownership to happen in the Web3 space we need an open protocol for community management. ZeusDAO was inspired by this problem statement and we have built a community platform for an NFT community in which a Steward/Admin of the project can just plugin into their main website and all the community management can happen there without the involvement of discord at all.

Let us go through a journey.

ZeusDAO has an NFT community that owns Zeus NFT.
All the Zeus NFT have either one of 3 traits (Gold, Silver, Bronze) think of them as discord access levels.
NFT Holders comes on the Zeus NFT main website, the ones who don't own the ZeusNFT can access the Home page only, but for the ones who own ZeusNFT -> As soon as they connect they can access more tabs within the website (just like discord channels) depending on the access trait the NFT has.
Now the Zeus NFT holders can access tabs like Gold, Silver, Bronze on the main website only where for now the admin/founder can post any video content for now ( from the admin dashboard), through this community can access the information just like they are used to in Discord but on the Zeus NFT platform itself, by just connecting their wallet.
These 3 tabs act as an information hub for those 3 respective token holders, where an admin can post information just like they would in discord.

The next thing which a community wants is a platform to do AMA, chat with the community on live streams. Currently, discord cannot handle that level of bandwidth and we all have faced issues using discord for AMA's and stuff, and an NFT community founder cannot use Youtube/Twitch to do the AMA's as they would then not be exclusive to the community.
So with the help of Livepeer (), We have built a feature in the open community protocol), the Zeus NFT holders can connect on AMA's on the main website and the live stream is only accessible to the holders.

For the MVP which we built during the hackathon a community founder can do AMA's and post information/video content using the protocol and all this is done on their main website without the involvement of any centralized tools.

And in order to incentivize the community to watch the video content and live streams, we have the POAP mining feature in the protocol in which when a user watched 70% of the video content, a pop-up will come from which they can claim their POAP as an appreciation.

# ZeusDAO showcase

### How it's made

## Tech Stack used

1. OpenSea API's for the indexing of NFT's
2. Livepeer for doing the Live AMA's
3. Polygon POS SDK for minting the POAP when a user have watched 70% of the video content
4. IPFS to store all ZeusDAO NFT's
5. Solidity for all Smart contracts
6. React, Node.js for frontend & backend

When a user connects the wallet on the platform, the Opensea API's check if the user have the ZeusNFT or not, if not they are shown (You don't have the NFT, Buy them on Opensea) and if the user hold then which access level do that have and depending on that, they are given access to those respective tabs (Gold, Silver, Bronze)

All the Zeus NFT are ERC-721 standards NFT which can be bought and sold on open sea testnet

Bronze holder can only access the Bronze Tab
Silver Holder can access both Bronze and Silver Tabs
Gold Holder can access all the 3 tabs

If a user has the Zeus NFT, other than the respective tabs they can also access the Livepeer tab which is the place for doing community calls (AMA's), live streams from a founder perspective.

In the Private Tabs, for now, the admin can share some video content and in order to build that we have a separate admin dashboard panel that only the admin can access using the credentials, so they upload a video content and select to which access level they wanna show this (Bronze, Silver, Gold).

In order to mint the POAP when a user has watched 70% of the video content on the platform, we are using the polygon network (Due to low gas fees) and no one wants to spend high fees just to mint a poap.

# Important Links

### Website: https://zeus-dao.web.app

### Eth global showcase: https://showcase.ethglobal.com/nfthack2022/zeusdao

### Token Metadata on Pinata: https://gateway.pinata.cloud/ipfs/QmeZ2KSLg6JtdX8NHEA3H5WhozT5EYDwpf7ujUuUB4i43U

### Google Slides: https://docs.google.com/presentation/d/1vXXj1SlGZ-dtkbHjvKPRfM-HFT0W4WSPQxos5jUl_Gc/edit?usp=sharing

## Contract Address on Rinkeby

### ZeusNFT: 0x5d3a3430aEBa963DA7a83a330337B9efe777A1e0

### POAP: 0xA3ED43F1D33ebFA24ca77a3149F5B6CA9c811F34

## Opensea Collection

### ZeusNFT: https://testnets.opensea.io/collection/zeusnft-v2

### POAP: https://testnets.opensea.io/collection/poapnft
