// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BoxV2 {
    uint private value;

    event UpdateValue(uint newValue);

    function updateValue(uint _value)  public {

        value = _value;
        emit UpdateValue(_value);
    }

    function getValue() public view returns(uint){
        return value;
    }

    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
        emit UpdateValue(value);
    }
}
