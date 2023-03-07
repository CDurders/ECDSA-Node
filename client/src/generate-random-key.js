let publicKeys = [
    "04bc29323e8f3c9ba52b95cc835270e93584954212df87ee6b34ed340847c4410857ea1b475b3f0e42a739c0de7b6ffcfe7ac4661b9722e01da61d36b0c1fa3e93",
    "0427dd8427c11ceb97b85377d85986f93394d17301030087ccc80a99157dc19fa36c5f2c9fca44fc7446e5b59c805a90c7434fddcf8bd3240612e76946fc581536",
    "04ae91fdb72272c358a98131bd17b03d909938736cb106b16b8a921fbaf3528956b4de0e5d4e7b3d0f4289c1bcf76a62667e87614f3019ed436808fadc4b2302e7",
];

let addressToPrivateKey = {
    "b83a61817ea23a57a12d645119a66c30ea5ff4da": "c445222f1959a99c65763c7b1b5ceb149efe6cfc612d33e9ba5ed48cf164bab9",
    "c9204eacc2a052fbdd2563d72978dfe9730da208": "d5b1fe768bb8635f7694d40d93e93f9ef9e4bb68dbae7d5f99c92d5b166f6436",
    "91218c63609ad45c860a2be17edbf23cfc39218f": "163fe0e501fb239d7dee3a144eb8ddd19301e35f80106a5a19cf03ca1be8cfc9",
};

// Generated private and public keys initially
/*for (let i = 0; i < 3; i++) {
    const privateKey = secp.utils.randomPrivateKey();
    console.log('private: ' + toHex(privateKey));

    const publicKey = secp.getPublicKey(privateKey);
    console.log('public: ' + toHex(publicKey)); 

    addressToPrivateKey[getAddressFromPublicKey(publicKey)] = privateKey;
    publicKeys.push(publicKey)
}*/

const generatedAccounts = {addressToPrivateKey, publicKeys};

export default generatedAccounts;