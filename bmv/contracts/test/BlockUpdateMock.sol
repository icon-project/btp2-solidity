// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@iconfoundation/btp2-solidity-library/contracts/RLPEncode.sol";
import "@iconfoundation/btp2-solidity-library/contracts/RLPDecode.sol";
import "../libraries/MerkleTreeLib.sol";
import "../libraries/BlockUpdateLib.sol";

contract BlockUpdateMock {
    using BlockUpdateLib for Header;
    using RLPDecode for bytes;
    using RLPDecode for RLPDecode.RLPItem;

    function decodeHeader(bytes calldata enc) public pure returns (Header memory) {
        return BlockUpdateLib.decodeHeader(enc);
    }

    function decodeProof(bytes calldata enc) public pure returns (Proof memory) {
        return BlockUpdateLib.decodeProof(enc);
    }
}
