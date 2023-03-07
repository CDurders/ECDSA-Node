const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

function getAddressFromPublicKey(publicKey) {
    const sliced = publicKey.slice(1);
    const hashPublicKey = keccak256(sliced);
    return toHex(hashPublicKey.slice(-20));
}

module.exports = getAddressFromPublicKey;