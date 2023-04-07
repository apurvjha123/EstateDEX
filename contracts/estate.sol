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
    
    function approveestate(uint256 id) public onlyGovernment {
        require(id <= totalestates && estates[id].isRegistered == true, "Invalid estate ID");
        estates[id].isApproved = true;
    }
    
    function getestateById(uint256 id) public view returns (address _owner, string memory _location, uint256 _area, uint256 _value, bool isApproved,address _buyer,address[] memory _previousOwners) {
        require(id <= totalestates && estates[id].isRegistered == true, "Invalid estate ID");
        return (estates[id].owner, estates[id].location, estates[id].area, estates[id].value, estates[id].isApproved,estates[id].buyer,estates[id].previousOwners);
    }
    function transferestateOwnership(uint256 id) public {
        require(id <= totalestates && estates[id].isRegistered == true && estates[id].isApproved == true, "Invalid estate ID or estate is not approved");
        require(msg.sender == estates[id].owner, "Only the owner can transfer ownership");
        estates[id].previousOwners.push(estates[id].owner);
        estates[id].owner = estates[id].buyer;
        estates[id].buyer = address(0);
    }

    function depositFunds(uint256 id) public payable{
        require(msg.sender != escrowAgent,"Agent can't deposite");
        estates[id].isDeposited = true;
        estates[id].buyer = msg.sender;
        deposits[msg.sender]+= msg.value;
    }
    function depositer(address id) public view returns(uint256){
        return deposits[id];
    }
    function withdrawfund(uint256 id) internal{
        require(estates[id].owner != msg.sender,"owner can't withdraw");
        address payable seller = payable(estates[id].previousOwners[estates[id].previousOwners.length-1]);
        seller.transfer(deposits[estates[id].owner]);
        deposits[estates[id].owner]=0;
    }

    function check(uint id) public view returns(uint){
        return deposits[estates[id].previousOwners[estates[id].previousOwners.length-1]];
    }
}