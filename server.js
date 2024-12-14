import express from "express";
import { createClient } from "@supabase/supabase-js";

// express object
const app = express();
app.use(express.json());
// create a single supabase client
const supabase = createClient(
  "https://nsbohikhndapsdxlksyi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zYm9oaWtobmRhcHNkeGxrc3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMjY4NzEsImV4cCI6MjA0ODkwMjg3MX0.O8n0Rej7DdRwvkK_3tHs5r9kkmm1g8oTiiAGZiVcsHg"
);

app.get("/", async (req, res) => {
  try {
    const { error } = await supabase.from("sensors-data").insert({
      moisture: 0.0,
      temperature: 0.0,
    });
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/store-moisture-average", async (req, res) => {
  const { moisture_average, temperature_average, battery_level } = req.body;
  const { error } = await supabase.from("sensors-data").insert({
    moisture: moisture_average,
    temperature: temperature_average,
    battery_level: battery_level,
  });
  res.status(200).json({ status: "success" });
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
