import { Request, Response } from "express";

import { MovieModel } from "../models/movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (err: any) {
        Logger.error(`System error: ${err.message}`);
    }
}