const mongoose = require("mongoose");

// Event schema ======================================================

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
    },
    remaining_places: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports ={ Event:mongoose.model("Event", eventSchema)} ;

