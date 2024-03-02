// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERD = 1;
    uint256 private constant _ENTERD = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERD;
    }

    modifier nonReentrant() {
        require(_status != _ENTERD, "ReentrancyGuard: reentrant call");

        _status = _ENTERD;

        _;

        _status = _NOT_ENTERD;
    }

    


}