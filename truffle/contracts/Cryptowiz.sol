// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Connector.sol";
contract Cryptowiz is ERC721Connector{
    //array to store nfts
    string [] public Cryptowiz;

    mapping (string => bool )  _cryptowizExists;

    function mint(string memory _cryptowiz) public {

        require(!_cryptowizExists[_cryptowiz],"Error - cryptowiz already exists");
        // this is deprecated uint _id = Cryptowiz.push(_cryptowiz);

        Cryptowiz.push(_cryptowiz);
        uint _id = Cryptowiz.length -1;

        _mint (msg.sender, _id);

        _cryptowizExists[_cryptowiz] = true;
    }
    constructor() ERC721Connector("Kerve donation","bdc"){
        
    } 
} 