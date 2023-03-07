const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hash-message");

function signatureToPublicKey(message, signature, recoveryBit) {
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
}

module.exports = signatureToPublicKey;