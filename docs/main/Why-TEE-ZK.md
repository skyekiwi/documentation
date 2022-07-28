---
id: why_tee_zk
title: Why TEE or Why zero-knowledge proof?
sidebar_label: Why TEE or Why ZK? 
slug: /why_tee_zk
description: Why TEE or Why use zero-knowledge proof?
image: img/meta.png
---

<br/>

## Why TEE or Why zkSNARK?

To achieve trustless private execution, there are generally two choices: **TEE** or **zero-knowledge proofs** (e.g. zkSNARK). To get to the bottom of these solutions, they both try to achieve the same thing: allow trustless miners to execute state transitions without any knowledge of the state, while producing publically verificable proofs. For end users, such systems bring two core benefits: scalable and cheap blockchain transactions, and privacy for executions. For every blockchain to be adopted, the need to be scalabe and cheap is a must. For the future of blockchains, privacy is a must. 

While software solutions like zkSNARK are considered more decentralized, but some inherentive limitations applies. 

### Centralization Concerns over TEE

To get started, we'd like to dive a bit deeper to this **centralization** to **decentralization** discussion first. The reason why TEE is usually considered centralized is based on two attacks: 

1. To use a TEE, usually we have to choose a platform, which tends to be Intel SGX. The concerns around having big and old hardware producer holding the most important parts of trust seems against the ethos of Web3. Well.. the reality is that majority of data centers that powers the internet are running on Intel chips. If we use the same attack, it's gonna applies to internet as a whole. Web3 runs on internet, while the internet itself is a huge centralized piece controlled by large data centers and internet backbone. Therefore, even though we believe in a fully decentralized digital world, we still consider such level of centralization relying on Intel SGX within the engineering margin of error. 

2. The `RemoteAttestation` service is a critical part for establishing trust on a new TEE node. It's typically done by Intel to prove a node is running a temper-proof software as intended by the network. The idea that for every nodes who are joinning the network to run an attestation against Intel sounds bad. However, [the Linux Foundation](https://www.linuxfoundation.org/press-release/confidential-computing-foundation-founding-member-comments/) has been putting together plans to change this and move `RemoteAttestation` to be more decentralized.


### Limitations on zkSNARK (as of today)
We have seen an extremly rapid develooment of zero-knowledge proof technologies. Since the Groth paper in 2016, we enter into the era of **zero-knowledge proofs** being fast and pratical enough to be used beyond acedemic research into real world applications. Every month features a new research paper. We have solved the issues of trusted setup for every new circut, reduce the proof and key size, and having tons of pratical implementations to generate zero-knowledge proofs for simple circut and base implementations to generate zero-knolwedge circuts. 

However, we are still pretty far away from a full feature zkSNARK virtual machine to production. Matters Labs and Polygon both claimed to be able to rollout a zkEVM very soon. However, by the codebase, we can see that the zkEVM is off to a great start. [Link](https://github.com/0xPolygonHermez). We expect the whole VM to be fully useable maybe in a year and another year or two before it can enter into production. Even after all functionalities are delivered well, we are still uncertain of how long it will take effect to have the calculation speed and space in reasonable place to be considered a valid scaling solution. Moreover, the progress of improving the speed of generating and verify proof has been slowed and more onto alternative hardwares than CPUs for accelerating calculation. When all software is ready to go, we might still see a period as short as a few months to a year for the hardware miners to catchup on deploying nodes. 

### Closing Thoughts
For SkyeKiwi, we like both tracks of technology. Therefore, as of today, we design the system to be as generic as possible. As we said at the beginning of this article: 

> To get to the bottom of these solutions, they both try to achieve the same thing: allow trustless miners to execute state transitions without any knowledge of the state, while producing publically verificable proofs.

Before zkSNARK vm is mature enough, we will use TEE + SkyeKiwi Protocol for execution and proof of the execution. We think the privacy tech is at its dawn and why not build applications first before having the perfect infrastracture. 


