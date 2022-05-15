---
id: introduction
title: Introducing SkyeKiwi
sidebar_label: Introduction
slug: /introduction
description: SkyeKiwi is building a privacy layer for blockchains based on a generic secret sharing protocol. 
image: img/meta.png
---

:::note
**A fun background story behind our logo** <br/><br/>
Little do people know that among all Greek letters, Sigma is a special one. Not only because it’s the Greek for S and S for  SkyeKiwi(duh..), but also because it’s the only Greek letter that can be written in three ways: uppercase “Σ”, lowercase “σ” and lowercase in word-final position “ς” and English likely adopt “ς” as “S” (they do look alike, right?). We make our logo to honor the Greeks’ letter Sigma but intentionally leave out the “ς” ( at a word-final position :) ), to keep this a secret (Shhhh... ). To read more on this fun Greek fact. [Link](https://en.wikipedia.org/wiki/Sigma)
:::


## 👋 Introduction {#introduction}

SkyeKiwi is building a privacy layer for blockchains (the SkyeKiwi Network) based on the cryptographic backbone of the SkyeKiwi Protocol. The SkyeKiwi Network is a **fast and cheap**, and **optional privacy** smart contract execution blockchain, packed with modern features. We aim to ease the pain of adoption to the era of privacy enabled interoperable blockchains. The core features behind the SkyeKiwi Network are awesome:

### 🚅 SkyeKiwi Protocol {#skyekiwi-protocol}

The SkyeKiwi Protocol is a flexible and generic secret sharing protocol. It acts as the cryptographic backbone for the SkyeKiwi Network and made lots of cool features possible on our blockchain privacy layer. A detailed spec on implementation can be found [here](/).

- It goes through two layers of encryption and is capable of mapping any secret of arbitrary size and type to a fixed 114 bytes of data. 
- The first layer of encryption expose a flexible interface to verifiable cryptographical proof of access to a secret with zero exposure of the underlying secret (Proof-of-Access). PoA is used for verification of execution integrity in the SkyeKiwi Network. 
- The SkyeKiwi Protocol is very private. Even though the metadata is stored on public ledgers, no information of the recipients or members will be exposed by default. 
- The SkyeKiwi Protocol is highly portable. We have implemented the SkyeKiwi Protocol for browsers, inside the Intel SGX security enclaves and as smart contract runtime host functions. 
- The SkyeKiwi Protocol has been reviewed and granted by the Web3 Foundation on all flavors of implementations as well as Parity Tech on the Substrate Builders Program. 
- The SkyeKiwi Protocol is heavily off-chain and hugely reduce the expansive on-chain footprint to make SkyeKiwi Network cheap to interact with. 
- The SkyeKiwi Protocol makes it way easier to efficiently scale the network, achieve more decentralization and effective and low-overhead key rotations. 


### 🤸‍ Relay Mechnism and Trustless Offchain Executor {#relay-mech}

A bit TL;DR of the core execution logic of the SkyeKiwi Network is that it expose three simple core interface to 
1. Deploy a contract by picking a human-readable name and publish a WASM code blob. 
2. Push a encoded batch of calls into an `sContract.pushCall` interface.
3. Read outcomes of a batch of calls by querying a `parentchain.outcomes` interface. 

On registering new contract/program or new contract calls to a destination, the offchain dispatcher will relay the call to the offchain runtime and execute a block of batched calls. Upon receiving the outcomes, the offchain runtime will sign the result with the Proof-of-Access mechnisim by the SkyeKiwi Protocl and publically verifable for execution integrity. 

As for the trustlessness of the offchain executor, the SkyeKiwi Network will comes in two flavors: Intel SGX based TEE solution and zkSNARK based zero-knowledge proof system. If you are curious of the choice - checkout the [Why TEE OR Why ZK?](/) explainer. 

### ⛳️ Virtual Shards {#virtual-shards}

The offchain execution runtime is sharded but not in a typical sense as lots of the sharding networks. For a more detailed explainer: checkout [Shard vs Virtual Shard](/). 

The first shard will be a NEAR Runtime shards that allow developers to make almost no changes to an existing NEAR WASM smart contract instantly to be privacy processing ready smart contract. 

The second shard will be an EVM compatible shard that allow developers to deploy their Solidity contract into the privacy side of blockchains.

Both the first and second shard will be based on TEE technology for easier and more familiar developer experience. 

The third shard will be a limited functioned zkSNARK shard. By limited functioned, it will only support transfering tokens for now, before a very functional programmable VM is built withint the ZK community. Eventually, gradually retire the TEE technology over a course of 5 years. 

### 🎯 Fast and Cheap Execution {#fast-n-cheap}

The SkyeKiwi Network is a hyper functional network by seperating the request aggregation layer, the data avalability layer and the execution layer, with a deadly simple end-user interface. It's a first of its kind seperation of blockchain functionalities to maximize efficiency. You can learn more in details from [Seperated Consensus](/). 

The TL;DR is that the end users will only need to pay fees to write the transaction request to the on-chain interface as well the an estimated cost to record the outcome of calls back to the main-chain. Therefore, traders, normal end-users will only need to pay a fraction of the cost even compared to normal public on-chain execution. For the cherry on the top, move over to the [Conditional Gasless Transaction](/) section to explore more. 

Execution is sharded and can be infinitely scaled on a way-ligher-than-on-chain execution environment. The actual delay for execution is almost instant but we wait an arbitrary 12-14 seconds for the block finalization and another 12-14 seconds for the results validation and aggregation on chain. From our insane stress testing, settlement of requests take about 30 seconds. 

### ⏳ Familiar Toolchains And More Powerful Runtime {#familar-tools}

The first two shards for programamble privacy are based on two of the most popular and most used smart contract system and have the full-power of leverage tons of existing toolchains. Developers won't have to spend weeks to learn the basic semantics of a new programming launguage at all. 

On the same time, the WASM offchain runtime is packed with [46 host functions](/)(and keep growing!) to deliver extremly high flexibility and customizability of what one can achieve with smart contracts. 

### 😎 Cross-Chain {#cross-chain}

SkyeKiwi Network will be cross-chain ready in the Polkadot/Kusama parachain system as well as the Octupus Network appchain system. Read more [here](/);

## 🎉 Credits {#credits}

This ducomentation website is built upon a template crafted by [AgileTs](https://agile-ts.org). 

## ❓ Something missing {#something-missing}

If you find issues with the documentation or have suggestions on how to improve the documentation or the project in
general, please [file an issue](https://github.com/skyekiwi/documentation) for us or join
our [Community Discord](https://discord.gg/274zjNkC) and notice it in the `#issue` channel.
