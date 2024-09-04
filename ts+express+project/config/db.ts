import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Mongoose is running!"); 
    } catch (e) {
        Logger.error("Error in connection with mongo!");
        Logger.error(`Error: ${e}`);
        process.exit(1);
    }
}

export default connect;