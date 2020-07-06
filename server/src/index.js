import express from "express";
import bodyParser from "body-parser";
import api from "./routes/api";
import conn from "./db/mysql";

const app = express();

let port = 8080;

app.use(bodyParser.json());

app.use("/api", api);

var sql = "SELECT * FROM test";
conn.query(sql, (err, results, fields) => {
    if (err) console.log(err);
    console.log(results);
});

app.listen(port, () => {
    console.log("Express is listening on port", port);
});

