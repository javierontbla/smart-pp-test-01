const express = require("express");

const app = express();

app.post("/sending-signal", (req, res) => {
  console.log("getting signal");
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
