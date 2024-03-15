const { model } = require("mongoose");
const eventModel = require("../models/event");
const createEvent = async (req, res) => {
    console.log(req.userId);
    // // this part
    const { eventName, eventDescription,eventLink,eventImage,eventVideo } = req.body;

    // new object creation
    const newEvent = new eventModel({
        eventName: eventName,
        eventDescription: eventDescription,
        eventLink:eventLink,
        eventImage:eventImage,
        eventVideo:eventVideo,
        userId: req.userId
    });
    try {
        await newEvent.save();
        console.log("newEvent:");
        console.log(newEvent);
        res.status(201).json(newEvent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}
const updateEvent =async (req, res) => {
    const id=req.params.id;
    const { eventName, eventDescription,eventLink,eventImage,eventVideo } = req.body;

    const newNote={
        eventName:eventName,
        eventDescription:eventDescription,
        eventLink:eventLink,
        eventImage:eventImage,
        eventVideo:eventVideo
    }

    try{
        await eventModel.findByIdAndUpdate(id,newNote,{new:true});
        res.status(200).json(newNote);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong!"});
    }
}
const deleteEvent =async (req, res) => {

    const id=req.params.id;
    try{
        const event=await eventModel.findByIdAndRemove(id);
        res.status(202).json(event);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong!"});
    }

}
const getEvent = async (req, res) => {
    try {
        const notes = await eventModel.find({ userId: req.userId });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
module.exports = {
    createEvent, updateEvent, deleteEvent, getEvent
}