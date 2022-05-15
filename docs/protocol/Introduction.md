---
id: introduction
title: Introducing SkyeKiwi Protocol
sidebar_label: Introduction
slug: /protocol/introduction
description: SkyeKiwi Protocol is a generic secret sharing protocol. 
image: img/meta.png
---

:::note
**A fun background story behind our logo** <br/><br/>
Little do people know that among all Greek letters, Sigma is a special one. Not only because it’s the Greek for S and S for  SkyeKiwi(duh..), but also because it’s the only Greek letter that can be written in three ways: uppercase “Σ”, lowercase “σ” and lowercase in word-final position “ς” and English likely adopt “ς” as “S” (they do look alike, right?). We make our logo to honor the Greeks’ letter Sigma but intentionally leave out the “ς” ( at a word-final position :) ), to keep this a secret (Shhhh... ). To read more on this fun Greek fact. [Link](https://en.wikipedia.org/wiki/Sigma)
:::

## What is SkyeKiwi Protocol?
SkyeKiwi is using a combination of multiple well-developed cryptographic schema to create a solution of securely sharing information in blockchain networks. The capacities of blockchain networks will be significantly enhanced when programable secrets can be processed through a decentralized network. We believe an innovative and unique new economic model will be created when secrets are processed on blockchains. 


## How does it work?

The SkyeKiwi Client Library reads in files/FormData in binary stream, divide them in chunks, generate a random sealing key of 32 bytes and symmetrically encrypt these chunks with the sealing key. Later on, a list of all CIDs and the sealing key will go through a Threshold secret sharing library then encrypted with the according public key of recipeints and pushed to a public IPFS network. The encrypted key shares will be composed into a metadata file and can be securely publicized. It will be stored on IPFS then publish the CID to a smart contract. 

## Install

|Package Name|Description|Status|
|---|---|---|
|`@skyekiwi/crypto`|Cryptographic Primitives|Ready|
|`@skyekiwi/diff`|Myers Diff algorithm. Used by the SkyeKiwi Network|WIP|
|`@skyekiwi/driver`|Core Driver of the protocol / exposed APIs|Ready|
|`@skyekiwi/file`|File stream wrapper|Ready. Alpha in Browsers|
|`@skyekiwi/ipfs`|IPFS Client wrapper|See [IPFS](/docs/protocol/ipfs)|
|`@skyekiwi/metadata`|Metadata Packaer|Ready|
|`@skyekiwi/s-contract`|Utilites and encoding schema for the sContract Interface|Limited Capcbility|
|`@skyekiwi/util`|Useful Utility Functions|Ready|
|`@skyekiwi/secret-registry`|Register your secret to the SkyeKiwi Network|Limited Capcbility|


## Sample Usage

```javascript
// Upstream a document
const registry = new SecretRegistry(mnemonic, {});

const file = new File('/path/to/file'); 
const sealer = new DefaultSealer(); // with Curve25519

sealer.unlock(mnemonicToMiniSecret(mnemonic));

const encryptionSchema = new EncryptionSchema();
encryptionSchema.addMember(sealer.getAuthorKey());

const result = await Driver.upstream(
  file, sealer, encryptionSchema, async (cid: string) => {
    // cid of the final encoded metadata;
    // we need to handle the behavior to blockchain manually here
    await registry.init();
    const registryResult = await registry.registerSecret(cid);
    
    // is res is null = blockchain error
    expect(res).not.toBeNull();

    console.log("The Secret ID is " ,res);
  }
);
```

```javascript
// Donwstream a Secret 

const sealer = new DefaultSealer(); // with Curve25519
sealer.unlock(mnemonicToMiniSecret(mnemonic));

// this is the result array
let downstreamContent = new Uint8Array(0);
await Driver.downstream(
  vaultId, [mnemonicToMiniSecret(mnemonic)], registry, sealer,
  (chunk: Uint8Array) => {
    downstreamContent = new Uint8Array([...downstreamContent, ...chunk])
  }
);
```

```javascript
// Update encryption schema(update the sharing list)
const result = await Driver.updateEncryptionSchema(
  vaultId, newEncryptionSchema, [mnemonicToMiniSecret(mnemonic)], registry, sealer,
  async (cid: string) => {
    // cid of the final encoded metadata;
    // we need to handle the behavior to blockchain manually here
    await registry.init();
    const registryResult = await registry.updateMetadata(cid);
    
    expect(registryResult).toEqual(true);
  }
);
```

```javascript
// Generate Proof-of-Access & Verify One
const sealer = new DefaultSealer();
sealer.key = mnemonicToMiniSecret(mnemonic);

const sig = await Driver.generateProofOfAccess(
  vaultId1, [mnemonicToMiniSecret(mnemonic)], registry, sealer,
  new Uint8Array([0x0, 0x1, 0x2, 0x3])
);

// should equals true
Driver.verifyProofOfAccess(sig)
```

### Run Test

1. Clone this repo to your local environment & install dependencies 

```bash
git clone git@github.com:skyekiwi/skyekiwi-protocol.git
yarn
```

2. Create `.env`  files at the project home directory and write your seed phrase to it

```
SEED_PHRASE = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx'
```

Go to our [Discord](https://discord.gg/274zjNkC) server for testnet faucet. 

3. Run Tests. The process can take somewhere between 3minutes to 10 minutes, depends on network connection. 

```bash
yarn test
```

5. Relax. The test should be able to finish within 5 minutes.

### LICENSE

Apache 2.0. See the `LICNESE` File. 

