import  express  from "express";
import {v4} from "uuid";

const app = express();

app.use(express.json()); // middleware para transformar las peticiones que llegan en formato json

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/tasks", (req, res) => {
    res.json([]);
});

app.post("/tasks", (req, res) => {
   const { title, description } = req.body;
   res.json({
    title,
    description,
    id: v4(),
   });
});

export default app;