import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AirQualitySchema = new Schema({
  datetime: { type: Date, default: Date.now },
  pollution: Object,
});

export const AirQuality = mongoose.model('AirQuality', AirQualitySchema);