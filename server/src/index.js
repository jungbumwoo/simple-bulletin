import express from "express";
import bodyParser from "body-parser";

const app = express();

let port = 8080;

app.use(bodyParser.json());
app.use("/api", api);

app.listen(post, () => {
    console.log("Express is listening on port", port);
});

