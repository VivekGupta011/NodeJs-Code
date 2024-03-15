const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    eventLink: {
      type: String,
    },
    eventImage: {
      type: String,
    },
    eventVideo: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", EventSchema);
