import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        console.log("Mongoose is running!"); 
    } catch (e) {
        console.log(e);
    }
}

export default connect;