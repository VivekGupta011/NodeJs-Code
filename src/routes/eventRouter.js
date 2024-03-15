const express = require("express");
const {    createEvent, updateEvent, deleteEvent, getEvent } = require("../Controllers/eventController");
const auth = require("../middlewares/auth");
const eventRouter = express.Router();

eventRouter.get("/",auth,getEvent)

eventRouter.post("/",auth,createEvent)

eventRouter.delete("/:id",auth,deleteEvent)

eventRouter.put("/:id",auth,updateEvent)

module.exports=eventRouter;