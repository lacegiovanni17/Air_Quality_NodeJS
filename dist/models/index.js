"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirQuality = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AirQualitySchema = new Schema({
    datetime: { type: Date, default: Date.now },
    pollution: Object,
});
exports.AirQuality = mongoose_1.default.model('AirQuality', AirQualitySchema);
