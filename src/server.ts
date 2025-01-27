import express from "express";
import { routes } from "./routes";

const server = express();
server.use(express.json());
server.use(routes);

server.listen(8081, () => console.log("Server is running on port 8081!"));
