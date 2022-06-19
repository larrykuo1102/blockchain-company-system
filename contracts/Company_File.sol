// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Company {

    mapping(address => string [] ) public personal;

    function addNote( string memory note) public {
        personal[msg.sender].push(note);
    }

    function getNotes( address own, uint16 index ) public view returns (string memory) {
        return personal[own][index] ;
    }

    function getNotesLen(address own) public view returns (uint) {
        return personal[own].length;
    }
}
