---
id: protocol 
title: SkyeKiwi Protocol Spec
sidebar_label: Protocol 
slug: /protocol/protocol
description: SkyeKiwi Protocol is a generic secret sharing protocol. 
image: img/meta.png
---

This document describes the core encoding schema for the SkyeKiwi Protocol. 

## Processing Pipeline & Two Rounds of Encryption
The SkyeKiwi Protocol applies two rounds of encryption on the target secret. And follows a simplified processing pipeline as below: 

1. Pre-processing: read in the incoming data in bytes stream and chunckify the stream to a fixed size depends on network condition. 
2. (First Encryption) Core Encryption: use a randomly generated private key on `Ed25519` curve to symmetrically encrypt the chunks. After each encryption process, the encrypted chunk will be stored in IPFS.
3. Compile the `PreSeal` metadata: the list of the encrypted chunks, the private key used for encryption, a version number, the hash of the original file will be encoded into a fixed size 114 bytes `PreSeal` metadata. Refer to the [Metadata](#metadata) section for more details.
4. (Second Encryption) Seal Metadata: the 114 bytes `PreSeal` metadata will be encrypted with the public key of the recipeints according to a `EncryptionSchema` and encoded into the `Sealed` metadata. The `Seale` metadata will also be stored in IPFS.
5. Write to Secret Registry: the IPFS CID of the `Sealed` metadata will be pushed to the Secret Registry on the SkyeKiwi Network.

## Metadata {#metadata}

The `PreSeal` metadata follows the following schema: 

```rust
// NOTE: ordering matters!
pub struct PreSeal {
    chunk_cid: types::ipfs::CID, // 46 bytes
    hash: types::file::Hash, // 32 bytes
    sealing_key: types::crypto::SecretboxKey, // 32bytes
    version: [u8; 4] // 4 bytes
}
```

The `Sealed Metadata` follows the following schema: 

```rust
// NOTE: ordering matters!
pub struct SealedMetadata {
    is_public: bool, // encoded into 2 bytes [0, 0] for false, [1, 1] for true 
    cipher: Vec<u8>, // encrypted PreSealed data concatenated together
    members_count: u64, // not encoded! Derived field
    version: [u8; 4], // enoded into 4 bytes
}
```

:::note
The length of the `cipher` on `SealedMetadata` is always equal to **186 bytes** multiplied by **the number of recipients**. 
:::

### Implementations

Currently the SkyeKiwi Protocol has been implemented on the following platforms:
1. Browser/TypeScript version: [Source Code](https://github.com/skyekiwi/skyekiwi-protocol)
2. The Intel SGX, Rust version: [Source Code](https://github.com/skyekiwi/skyekiwi-network/tree/master/crates/skw-sgx-protocol)
