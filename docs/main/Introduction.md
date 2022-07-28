---
id: introduction
title: Introducing SkyeKiwi
sidebar_label: Introduction
slug: /introduction
description: SkyeKiwi is building a privacy layer for blockchains based on a generic secret sharing protocol. 
image: img/meta.png
---
Welcome to SkyeKiwi Network documentation! For any question, join our community on [discord](https://discord.com/invite/m7tFX8u43J) for discussion and be part of our ecosystem.

## 👋 Introduction {#introduction}

SkyeKiwi is building a privacy layer for blockchains (the SkyeKiwi Network) based on the cryptographic backbone of the SkyeKiwi Protocol. The SkyeKiwi Network is **scalable and cheap**, with **optional privacy** smart contract execution features. We aim to ease the pain of adoption to the era of privacy enabled interoperable blockchains. 

The core features behind the SkyeKiwi Network are awesome:

### 🚅 SkyeKiwi Protocol {#skyekiwi-protocol}

The SkyeKiwi Protocol is a flexible and generic secret sharing protocol. It acts as the cryptographic backbone for the SkyeKiwi Network and allows for interesting features to be developed on top of the SkyeKiwi protocol. A detailed spec on implementation can be found [here](/).

- **Two layers** of encryption and is capable of mapping any secret of arbitrary size and type to a fixed 114 bytes of data. 
    - The first layer of encryption exposes a flexible interface to verifiable cryptographical proof of access to a secret with zero exposure of the underlying secret (Proof-of-Access). PoA is used for verification of execution integrity in the SkyeKiwi Network. 
    - The second layer of encryption securely handles the rotation of public and private keys. **The metadata is securely stored on public ledgers**, no information of the recipients or members will be exposed by default. 
- **Highly portable** - the SkyeKiwi Protocol was implemented for browsers, inside the Intel SGX security enclaves and as smart contract runtime host functions. 
- The Web3 Foundation Grant recipient. Supported by the Substrate Builders Program, and all codes are reivewed by Parity Tech.
- **Heavily off-chain**, and reducing the expansive on-chain footprint to make SkyeKiwi Network cheap to interact with. 
- Easier to efficiently scale the network, achieve more decentralization and **effective & low-overhead key rotations**. 


### 🤸‍ Relay Mechanism and Trustless Offchain Executor {#relay-mech}

The core execution logic of the SkyeKiwi Network is that it expose three simple core interface to: 
1. Deploy a contract by picking a human-readable name and publish a WASM code blob. 
2. Push encoded batch of calls into an `sContract.pushCall` interface.
3. Read outcomes of a batch of calls by querying a `parentchain.outcomes` interface. 

On registering a new contract/program or new contract calls to a destination, the offchain dispatcher will relay the call to the offchain runtime and execute a block of batched calls. Upon receiving the outcomes, the offchain runtime will sign the result with the Proof-of-Access mechanisim by the SkyeKiwi Protocol and publically verifiable for execution integrity. 

As for the trustlessness of the offchain executor, the SkyeKiwi Network comes in two options: Intel SGX based TEE solution and zkSNARK based zero-knowledge proof system. If you are curious of the choice - checkout the [Why TEE OR Why ZK?](/) explainer. 

### ⛳️ Virtual Shards {#virtual-shards}

The offchain execution runtime is sharded but not in a typical sense as lots of the sharding networks. For a more detailed explainer: checkout [Shard vs Virtual Shard](/). 

The first shard is a **NEAR Runtime shard** that allows developers to switch an existing NEAR WASM smart contract instantly into a privacy-processing ready smart contract with minimal changes.

The second shard is **EVM compatible** allowing developers to deploy their Solidity contracts into the privacy side of blockchains.

Both the first and second shards will be based on TEE technology for a easier and more familiar developer experience. 

The third shard is a limited function **zkSNARK shard**; it only supports transferring tokens at the beginning, before a very functional programmable VM is built within the ZK community. The goal is to eventually retire the TEE technology over a course of 5 years. 

### 🎯 Fast and Cheap Execution {#fast-n-cheap}

The SkyeKiwi Network is a hyper functional network, by separating the request aggregation layer, the data availability layer and the execution layer, with a simple end-user interface. It's a first of its kind separation of blockchain functionalities to maximize efficiency. You can learn more in details from [Seperated Consensus](/). 

The TL;DR is that the end users will only need to pay fees to write the transaction request to the on-chain interface and an estimated cost to record the outcome of calls back to the main-chain. Therefore, traders, normal end-users will only need to pay a fraction of the cost even compared to a normal public on-chain execution. Read more on [Conditional Gasless Transaction](/) section to dive deeper. 

Execution is sharded and can be infinitely scaled on a way-ligher-than-on-chain execution environment. The actual delay for execution is almost instant but we wait an arbitrary 12-14 seconds for the block finalization and another 12-14 seconds for the results validation and aggregation on chain. Through stress testing, settlement of requests take approximately 30 seconds. 

### ⏳ Familiar Toolchains And More Powerful Runtime {#familar-tools}

The first two shards for programmable privacy are based on two of the most popular and most used smart contract system and have the full-power to leverage tons of existing toolchains. Developers will not have to spend weeks learning the basic semantics of a new programming language at all. 

The WASM offchain runtime is packed with [46 host functions](/) currently (continues growing) while delivering extreme flexibility and customizability. 

### 😎 Cross-Chain {#cross-chain}

SkyeKiwi Network will be cross-chain ready in the Polkadot/Kusama parachain system as well as the Octopus Network appchain system. Read more [here](/);

## 🎉 Credits {#credits}

This documentation website is built upon a template crafted by [AgileTs](https://agile-ts.org). 

## ❓ Something missing {#something-missing}

If you find issues with the documentation or have suggestions on how to improve the documentation or the project in
general, please [file an issue](https://github.com/skyekiwi/documentation) for us or join
our [Community Discord](https://discord.com/invite/m7tFX8u43J) and notice it in the `#feedback` channel.
