---
id: env-setup 
title: Setup Your Environment
sidebar_label: Environment Setup
slug: /quick-start/env-setup
---

To develop on top of SkyeKiwi, you would first need to grab a few tools. 

## Setup Rust

Rust setup is pretty straight forwards. Take reference on [Rust Install Guide](https://www.rust-lang.org/tools/install) or simply follow the cheatsheet below. 

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
rustup default stable
rustup update nightly
rustup update stable
rustup target add wasm32-unknown-unknown --toolchain nightly
```

The above setup works 95% of times. As Rust gaining popularities, if you encoutner any additional issues with Rust, a simple Google search should hanve you covered.

## Node.js and Yarn

Node.js is used to power scripts used for deployments and interactions. Yarn is used to manage dependencies. 

```bash
# on linux 
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt-get install -y nodejs
sudo npm i -g yarn
```

If you are on Mac, things are simpler. Go to this [Download Page](https://nodejs.org/en/download/) and grab yourself a installer. 

## Miscs

If anything funny happens in building, you might need to install a few additional softwares in your environment. For most of the time, you won't need these, but we would just put these here as a cheatsheet for you incase if you need them. 

```bash
# install typical building suite for Ubuntu 
sudo apt install -y cmake pkg-config libssl-dev git build-essential clang libclang-dev curl

# Open an issue to us if you came across other issues
```

 