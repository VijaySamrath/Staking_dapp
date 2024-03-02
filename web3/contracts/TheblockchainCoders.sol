// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Theblockchaincoders {
    string public name = "@theblockchaincoders";
    string public symbol = "TBC";
    string public standard = "theblockchaincoders v.0.1";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint256 public _usersId;

    uint256 constant initialSupply = 1000000 * (10**18);

    address[] public holderToken;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    struct TokenHolderInfo{
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    mapping(address => uint256) public balanceOf;

    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply
    }

    
}