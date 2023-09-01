"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPollutedDateTime = exports.getAir = void 0;
const models_1 = require("../models");
const node_cron_1 = __importDefault(require("node-cron"));
const fetch = require("node-fetch");
// @ts-ignore
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getAir = async (req, res) => {
    try {
        const apiKey = process.env.APIKEY;
        const { LATITUDE, LONGITUDE } = req.params;
        const response = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${apiKey}`);
        const data = await response.json();
        console.log(data.data);
        const Result = { pollution: data.data.current.pollution };
        res.json({ Result });
        node_cron_1.default.schedule("* * * * *", async () => {
            try {
                const LATITUDE = "48.856613";
                const LONGITUDE = "2.352222";
                const response = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${apiKey}`);
                const data = await response.json();
                const newAirQuality = new models_1.AirQuality({
                    pollution: data.data.current.pollution,
                });
                await newAirQuality.save();
                console.log("Air quality data saved:", newAirQuality);
            }
            catch (error) {
                console.error("Error fetching or saving air quality data:", error);
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred" });
    }
};
exports.getAir = getAir;
const mostPollutedDateTime = async (req, res) => {
    try {
        const mostPollutedEntry = await models_1.AirQuality.findOne({}, {}, { sort: { "pollution.aqius": -1 } });
        if (!mostPollutedEntry) {
            return res.status(404).json({ message: "No data found" });
        }
        const mostPollutedDatetime = mostPollutedEntry.datetime;
        res.json({ mostPollutedDatetime });
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};
exports.mostPollutedDateTime = mostPollutedDateTime;
