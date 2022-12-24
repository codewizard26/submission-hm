//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

interface IERC721{

    event Tranfer(address indexed from ,address indexed to, uint256 indexed tokenId);

    //approval 
    //balanceOf
    function balanceOf(address _owner) external view returns (uint256);


    function ownerOf(uint256 _tokenId) external view returns(address);
        
    
    function transferFrom(address _from, address _to ,uint256 _tokenId) external ;
        
    
    //safeTransferFrom

}