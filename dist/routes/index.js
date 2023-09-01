"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
/* GET home page. */
router.get("/getAir/:LATITUDE/:LONGITUDE", controllers_1.getAir);
router.get("/most_polluted_datetime", controllers_1.mostPollutedDateTime);
exports.default = router;
