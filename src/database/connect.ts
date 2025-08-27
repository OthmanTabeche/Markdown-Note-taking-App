import mongoose from "mongoose";
import config from "../utils/config.js";
import logger from "../utils/logger.js";

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('DATABASE CONNECTED SUCCESSFULLY')
    })
    .catch((error) => {
        logger.error(`Error connecting the data base: ${error}`)
    })