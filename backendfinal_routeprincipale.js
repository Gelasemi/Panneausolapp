app.post("/projects", upload.array("files"), async (req, res) => {

  const files = req.files.map(f => f.path);

  const plu = await getPLUData(req.body.city);

  const aiRes = await axios.post("http://localhost:5000/analyse", {
    files,
    text: req.body.description,
    type: req.body.type,
    surface: req.body.surface
  });

  const project = new Project({
    ...req.body,
    files,
    plu,
    result: aiRes.data
  });

  await project.save();

  res.json(project);
});