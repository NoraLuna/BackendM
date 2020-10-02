const mongoose = require('mongoose');
const schema = mongoose.Schema;

const graphSchema = schema(
    {
        name: {
            type: String,
            required: "Name is required!",
          },
        count: {
            type: String,
            required: "Count is required!",
        },
        article1:{
            type: String,
            required: "Article1 is required!",

        },
        article2:{
            type: String,
            required: "Article2 is required!",

        },
        percentage1: {
            type: String,
            required: "percentage is required!",
        },
        percentage2: {
            type: String,
            required: "percentage is required!",
        },
        number1: {
            type: String,
            required: "number is required!",
        },
        number2: {
            type: String,
            required: "number is required!",
        },
        color: {
            type: String,
            required: "color is required!",
        }
    }
);

module.exports = mongoose.model("Graphs", graphSchema);
