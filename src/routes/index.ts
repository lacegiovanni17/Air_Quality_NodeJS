import express, { Request, Response, NextFunction } from "express";
import { getAir, mostPollutedDateTime } from "../controllers";
const router = express.Router();

/* GET home page. */
router.get("/getAir/:LATITUDE/:LONGITUDE", getAir)
router.get("/most_polluted_datetime", mostPollutedDateTime)
export default router;
