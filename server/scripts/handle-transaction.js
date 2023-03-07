const signatureToPublicKey = require('./signature-to-public-key');
const { hexToBytes } = require("ethereum-cryptography/utils");


function handleTransaction(message, signature) {
    const sigAsBytes = hexToBytes(signature);
    const signatureBytes = sigAsBytes.slice(1);
    const publicKey = sigToPubKey(message, signatureBytes, sigAsBytes[0]); 
    return publicKey;
}

function sigToPubKey(message, sigBytes, recovery) {
    return signatureToPublicKey(message, sigBytes, recovery);
}

module.exports = handleTransaction;