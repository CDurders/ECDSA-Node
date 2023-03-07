const { keccak256 } = require("ethereum-cryptography/keccak");

function hashMessage(message) {
    return keccak256(Uint8Array.from(message));
}

module.exports = hashMessage;