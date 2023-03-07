const balances = {};

const addresses = [
    "b83a61817ea23a57a12d645119a66c30ea5ff4da",
    "c9204eacc2a052fbdd2563d72978dfe9730da208",
    "91218c63609ad45c860a2be17edbf23cfc39218f",
];

for (const address of addresses) {
    balances[address] = Math.floor(Math.random() * 100) + 1;
}

module.exports = balances;