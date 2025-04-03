const express = require("express");
const app = express();

app.use(express.json());
let cookies = ["chocochips", "badam-pista", "cashew"];
let orders = [];

app.get("/", (req, res) => {
  res.json(cookies);
});

app.post("/", (req, res) => {
  orders.push({
    name: req.body.name,
    flavor: req.body.flavor,
    qty: req.body.qty,
  });
  res.json(orders);
});

app.put("/", (req, res) => {
  const orderIndex = orders.findIndex((o) => o.name === req.body.name);

  orders[orderIndex].flavor = req.body.flavor;

  res.json(orders);
});

app.delete("/", (req, res) => {
  const filteredOrders = orders.filter((o) => o.name !== req.body.name);
  orders = [...filteredOrders];

  res.json(orders);
});

app.listen(3000);
