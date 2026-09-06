const express = require("express")
const app = express()
const crypto = require("crypto")
const fs = require("fs/promises")
const path = require("node:path");


const PATH_TO_DATA = path.join(__dirname, "data.json");
app.use(express.json())
const events = [
  {
    id: "101",
    title: "Tekron",
    description: "This is a tekron event",
  },
  {
    id: "201",
    title: "Blood Donation Camp",
    description: "This is a blood donation camp",
  },
];


app.patch("/events/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const index = events.findIndex((event) => event.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Event does not exist" });
  }

  events[index] = {
    id: events[index].id,
    title: body.title || events[index].title,
    description: body.description || events[index].description
  };

  res.json(events[index]);
});


app.post("/events", async (req,res)=>{
    if (!body.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (!body.description) {
    return res.status(400).json({ message: "Description is required" });
  }

    const newEvent = {
    id: crypto.randomUUID(),
    title: body.title,
    description: body.description,
  };
  const jsonData = await fs.readFile(PATH_TO_DATA, "utf-8");
  const parsedData = JSON.parse(jsonData);
  parsedData.push(newEvent);
  fs.writeFile(PATH_TO_DATA, JSON.stringify(parsedData,null,2 ),"utf-8")
  res.status(201).json(newEvent); 
}


)
app.get("/events", async (req, res) => {
  const json = await fs.readFile(PATH_TO_DATA, "utf-8");
  res.set("Content-Type", "application/json");
  res.send(json);
});



app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    events = events.filter(event => event.id != id)

    const eventToDelete = events.find((event) => event.id === id);

  if (eventToDelete === undefined) {
    return res.status(404).json({ message: "Event does not exist" });
  }

    res.status(204).send()
})
app.listen(3000,()=>{
    console.log(`Server started on port 3000`)
})