// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.0;

interface IGod {

  // struct to store each token's traits
  struct WorshipperGod {
    bool isWorshipper;
    uint8 tone;
    uint8 head;
    uint8 ears;
    uint8 eyes;
    uint8 nose;
    uint8 mouth;
    uint8 neck;
    uint8 feet;
    uint8 alphaIndex;
  }


  function getPaidTokens() external view returns (uint256);
  function getTokenTraits(uint256 tokenId) external view returns (WorshipperGod memory);
}