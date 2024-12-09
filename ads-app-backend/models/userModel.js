const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    departamento: { type: String },
    provincia: { type: String },
    distrito: { type: String },
    contactNumber: { type: String },
    cost: { type: Number },
    currency: { type: String },
    address: { type: String },
    googleLink: { type: String },
    areaTotal: { type: String },
    habitaciones: { type: Number },
    planta: { type: Number },
    bano: { type: String },
    mobiliario: { type: String },
    equipamiento: { type: String },
    servicios: { type: String },
    pictures: [{ type: String }], // Store image URLs or file paths
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Ad = mongoose.model("Ad", adSchema);
module.exports = Ad;
