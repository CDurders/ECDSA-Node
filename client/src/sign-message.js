import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";

async function signMessage(msg, privateKey) {
    const [signature, recoveryBit] = await secp.sign(msg, privateKey, { recovered: true });
    const fullSignature = new Uint8Array([recoveryBit, ...signature]);
    return toHex(fullSignature);
}

export default signMessage;