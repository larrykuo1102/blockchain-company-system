// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Company {

    mapping(address => string [] ) public personal;
    // address[16] public personal;  // 保存個人的地址



    function addNote( string memory note) public {
        personal[msg.sender].push(note);

    }

    // 返回领养者
    function getNotes( address own, uint16 index ) public view returns (string memory) {
        return personal[own][index] ;
    }

    function getNumber( uint a, uint b ) pure public  returns ( uint  ) {
        return a + b  ;
    }

    function getNotesLen(address own) public view returns (uint) {
        return personal[own].length;
    }


}
