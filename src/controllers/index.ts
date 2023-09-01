import { Request, Response } from "express";
import { AirQuality } from "../models";
import cron from "node-cron";
const fetch = require("node-fetch");

// @ts-ignore
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export const getAir = async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.APIKEY;
    const { LATITUDE, LONGITUDE } = req.params;
    const response = await fetch(
      `http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${apiKey}`
    );
    const data = await response.json();
    console.log(data.data);
    const Result = { pollution: data.data.current.pollution };
    res.json({ Result });

    cron.schedule("* * * * *", async () => {
      try {
        const LATITUDE = "48.856613";
        const LONGITUDE = "2.352222";
        const response = await fetch(
          `http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${apiKey}`
        );
        const data = await response.json();
        const newAirQuality = new AirQuality({
          pollution: data.data.current.pollution,
        });
        await newAirQuality.save();

        console.log("Air quality data saved:", newAirQuality);
      } catch (error) {
        console.error("Error fetching or saving air quality data:", error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export const mostPollutedDateTime = async (req: Request, res: Response) => {
  try {
    const mostPollutedEntry = await AirQuality.findOne(
      {},
      {},
      { sort: { "pollution.aqius": -1 } }
    );
    if (!mostPollutedEntry) {
      return res.status(404).json({ message: "No data found" });
    }
    const mostPollutedDatetime = mostPollutedEntry.datetime;
    res.json({ mostPollutedDatetime });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
