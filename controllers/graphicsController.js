const mongoose = require("mongoose");
const Graphs = mongoose.model("Graphs");
exports.register = async (req, res) => {
    const { name, count,article1,article2, percentage1, percentage2,number1,number2,color } = req.body;
    
    const newGraph = Graphs({
      name:name,
      count:count,
      article1:article1,
      article2:article2,
      percentage1 : percentage1,
      percentage2 : percentage2,
      number1:number1,
      number2:number2,
      color:color
    });
    
    await newGraph.save();
    res.json({
      message: "User [" + name + "] registered successfully!",
    });
};

exports.getAllVentas = async (req, res) => {
    const graph = await Graphs.find({});
    res.json(graph);
};