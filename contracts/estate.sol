// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract estateRegistration {
    struct estate {
        uint256 id;
        address owner;
        string location;
        uint256 area;
        uint256 value;
        bool isRegistered;
        bool isApproved;
        bool isDeposited;
        address buyer;
        address[] previousOwners;
    }

    address payable public escrowAgent;
    
    mapping (uint256 => estate) estates;
    mapping (address => uint256) deposits;
    uint256 public totalestates;
    address public government;
    
    constructor() {
        totalestates = 0;
        government = msg.sender;
        escrowAgent= payable(msg.sender);
    }
    
    modifier onlyGovernment() {
        require(msg.sender == government, "Only government can perform this action");
        _;
    }
    
    function registerestate(string memory location, uint256 area, uint256 value) public returns (uint256) {
        totalestates++;
        estates[totalestates] = estate(totalestates, msg.sender, location, area, value, true, false,false,address(0),new address[](0));
        return totalestates;
    }
    
}
