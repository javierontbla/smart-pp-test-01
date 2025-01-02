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

app.post("/store-sensor-readings", async (req, res) => {
  const { moisture_average, temperature_average, battery_level } = req.body;
  const { error } = await supabase.from("sensor-readings-prototype-v1").insert({
    moisture: moisture_average,
    temperature: temperature_average,
    battery_level: battery_level,
  });
  res.status(200).json({ status: "success" });
});

app.post("/store-error-logs", async (req, res) => {
  const { esp32_error } = req.body;
  const { error } = await supabase.from("errors-logs").insert({
    error: esp32_error,
  });
  res.status(200).json({ status: "success" });
});

app.listen(3000);
