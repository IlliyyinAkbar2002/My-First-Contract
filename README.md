# My First Smart Contract

A simple Ethereum smart contract project demonstrating basic contract functionality with full test coverage.

## Description

This project implements a basic smart contract that manages a name string with getter and setter functions. It's built using:

- Solidity ^0.8.0
- Hardhat development environment
- Ethers.js
- Chai for testing
- Istanbul for code coverage

## Features

- Store and retrieve a name string
- Change name functionality
- 100% test coverage
- Local development network support

## Contract Functions

The smart contract (`MyContract.sol`) implements:

- `constructor(string memory _name)`: Initializes the contract with a name
- `changeName(string memory _name)`: Updates the stored name
- `getName()`: Retrieves the current name


## Test Coverage

The project maintains 100% test coverage across all metrics:
- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## Project Structure

├── contracts/
│ └── MyContract.sol
├── test/
│ └── MyContract.test.mjs
├── scripts/
│ └── deployMyContract.cjs
├── hardhat.config.cjs
└── package.json

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

# Install dependencies
npm install

# Compile contracts
npm run build

# Run tests
npm run test

# Run tests without coverage
npm run test:light

# Start local testnet
npm run local-testnet

# Deploy to local network
npm run deploy:local


## License

ISC