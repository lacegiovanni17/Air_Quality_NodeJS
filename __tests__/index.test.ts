import { Request, Response } from "express";
import { getAir, mostPollutedDateTime } from "../src/controllers/index"; // Assuming the file is named index.ts
import { AirQuality } from "../src/models/index"; // Update the path to your models
import cron from "node-cron";
const fetch = require("node-fetch");

// Mocks
jest.mock("node-fetch");
jest.mock("node-cron");

describe("Controller Tests", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAir", () => {
    it("should fetch air quality data and return it", async () => {
      const LATITUDE = "48.856613";
      const LONGITUDE = "2.352222";
      const mockResponse = {
        json: jest.fn().mockResolvedValue({
          data: {
            current: {
              pollution: { aqius: 50 },
            },
          },
        }),
      };
      // @ts-ignore
      fetch.mockResolvedValue(mockResponse);

      await getAir(req as Request, res as Response);

      expect(fetch).toHaveBeenCalledWith(
        `http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${process.env.APIKEY}`
      );
      expect(mockResponse.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ Result: { pollution: { aqius: 50 } } });
    });

    it("should handle errors", async () => {
      // @ts-ignore
      fetch.mockRejectedValue(new Error("Fetch error"));

      await getAir(req as Request, res as Response);

      expect(fetch).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "An error occurred" });
    });

    it("should schedule a cron job to fetch and save air quality data", () => {
      // TODO: Test cron job functionality
    });
  });

  describe("mostPollutedDateTime", () => {
    it("should return the most polluted datetime", async () => {
      const mockMostPollutedEntry = {
        datetime: "2023-08-31T12:00:00Z",
      };
      // @ts-ignore
      AirQuality.findOne = jest.fn().mockResolvedValue(mockMostPollutedEntry);

      await mostPollutedDateTime(req as Request, res as Response);

      expect(AirQuality.findOne).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ mostPollutedDatetime: "2023-08-31T12:00:00Z" });
    });

    it("should handle no data found", async () => {
      // @ts-ignore
      AirQuality.findOne = jest.fn().mockResolvedValue(null);

      await mostPollutedDateTime(req as Request, res as Response);

      expect(AirQuality.findOne).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "No data found" });
    });

    it("should handle errors", async () => {
      // @ts-ignore
      AirQuality.findOne = jest.fn().mockRejectedValue(new Error("Database error"));

      await mostPollutedDateTime(req as Request, res as Response);

      expect(AirQuality.findOne).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "An error occurred" });
    });
  });
});


jest.mock('node-fetch', () => jest.fn());

// In my test case
const mockResponse = {
  json: jest.fn().mockResolvedValue({ /* mock data */ }),
};
// @ts-ignore
fetch.mockResolvedValue(mockResponse);

// Test your function that uses fetch
