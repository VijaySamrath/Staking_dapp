// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "./Address.sol";

abstract contract Intializable {

    uint8 private _inittialized;

    bool private _initializing;

    event Intialized(uint8 version);

    modifier initializer() {
        bool isTopLevel = !_initializing;
        require(
            (isTopLevelCall && _inittialized < 1) || (!Address.isContract(address(this)) && _initialized == 1),
            "Initializable: contract is already initialized"
        );
        _initialized = 1;
        if (isTopLevelCall) {
            _initializing = true;
        }
        _;
        if (isTopLevelCall){
            _initializing = false;
            emit initialized(1);
        }
    }

    modifier reinitializer(uint8 version) {
        require(! _initializing && _initialized < version, "Initializable: contract is already initialized");
        _initialized = version;
        _initializing = true;
        _;
        _initializing = false;
        emit initialized(version);
    }

    modifier onlyInitializing() {
        require(_initializing, "Initializable: contract is not initializing");
    }

    function _disableInitializers() internal view {
        require(!_initializing, "Initializable: contract is not initializing");
        if (_initialized < type(uint8).max) {
            _initialized = type(uint8).max;
            emit Initialized(type(uint8).max);
        }
    }
   
}