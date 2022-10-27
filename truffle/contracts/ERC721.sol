//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./interfaces/IERC165.sol";
import "./ERC165.sol";
import "./interfaces/IERC721.sol";
import "./libraries/Counters.sol"; 

contract ERC721 is ERC165,IERC721{
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    address public owner;

    mapping(uint256 =>address) private _tokenOwner;
    mapping (address =>Counters.Counter) private _ownedTokensCount;
    constructor(){
         owner = msg.sender;

         _registerInterface(bytes4(keccak256("balanceOf(bytes4)")^
         keccak256('ownerOf(bytes4)') ^ keccak256('tranferFrom(bytes4)')));
    }

    function balanceOf(address _owner) public view override returns (uint256){
         require(_owner !=address(0),"ERC721: NFTs assigned to the zero address");
         return _ownedTokensCount[_owner].current();

    }

    function ownerOf(uint256 _tokenId) external view override returns (address){
        address ownerOfNft = _tokenOwner[_tokenId];
        require(ownerOfNft != address(0),"ERC721 : owner query for non-existent token");
        return ownerOfNft;
    }

    function _exists(uint256 tokenId) internal view returns (bool){
        address Own = _tokenOwner[tokenId];
        return Own != address(0);
    }

    function _mint(address to ,uint256 tokenId) internal virtual{
        require(to!= address(0),"ERC721: minting to the zero address");
        require (msg.sender == owner,"ERC721: you are not the owner of the contract");

        //check that the token does not already exists
        require(!_exists(tokenId),"ERC721: token already minted");
        _tokenOwner[tokenId] = to; 
        _ownedTokensCount[to].increment();

        emit Tranfer(address(0), to , tokenId );

    }

    function _transferFrom(address _from, address _to, uint256 _tokenId) internal{
        require(_to!= address(0),"Error: ERC721 Transfer to the zero address");
        //require(ownerOf(_tokenId) ==_from,"Trying to transfer a token failed as you are not the owner");

        _ownedTokensCount[_from].decrement();
        _ownedTokensCount[_to].increment();

        _tokenOwner[_tokenId] = _to;

        emit Tranfer(_from,_to,_tokenId);
    }

    function transferFrom(address _from, address _to,uint256 _tokenId) override public {
        _transferFrom(_from, _to, _tokenId);
    }
}