# Ethereum # Polygon POS


## Compile 

```sh
npx hardhat compile
```

## Test

```sh
npx hardhat test test/box.proxy.js
```

## Deploy

```sh
npx hardhat --network <NETWORK> scripts/deploy.js
```

## Verify

```sh
npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
```

Download [hardhat](https://hardhat.org/)
[Follow the Openzeppelin guide](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580)

## Some other commands

```
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
