import express from 'express';
import { dbconnect } from "./Database/dbconnect.js";
import massageRouter from "./Router/massgaeRouter.js"
import cors from "cors";

const app = express();

app.use(
    cors({
    origin : ["http://localhost:5173/"],
    method : ["POST"],
    Credentials : true,
})
)

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api/v1/massage", massageRouter);

dbconnect();

export default app;