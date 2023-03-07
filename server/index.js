const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const balances = require('./scripts/setup-balances');
const handleTransaction = require('./scripts/handle-transaction');
const getAddressFromPublicKey = require("./scripts/get-address-from-public-key");

app.use(cors());
app.use(express.json());

console.log('Balances: ');
console.log(balances);

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { message, signature } = req.body;
  const { recipient, amount, sender } = message;

  setInitialBalance(recipient);

  const senderPubKey = handleTransaction(message, signature);
  const addressFromSignature = getAddressFromPublicKey(senderPubKey)

  setInitialBalance(addressFromSignature);

  if (balances[addressFromSignature] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  }
  else if (sender != addressFromSignature) {
    res.status(400).send({ message: "Not correct address!" });
  } 
  else {
    balances[addressFromSignature] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[addressFromSignature] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
