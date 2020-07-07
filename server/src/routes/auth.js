import express from "express";
import mysql from "../db/mysql";
import e from "express";
const router = express.Router();

router.get("/token", (req, res) => {
    const user = req.session.token;
    const token = req.sessionID;
    return res.json({
        user: user,
        token
    });
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let sql = "SELECT password FROM user WHERE username = ?";
    const post = [username];
    mysql.query(sql, post, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                error: "db error",
                status: 400
            });        
        } else {
            const user_password = results[0].password;
            if (password === user_password) {
                req.session.token = username;
                return res.json({
                    ok: true,
                    error: null,
                    status: 200
                });
            } else {
                return res.json({
                    ok: false,
                    error: "check again username and password",
                    status: 400
                });
            }
        }
    });
});

router.get("/logout", (req, res) => {
    delete req.session.token;
    return res.json({
        ok: true,
        error: null,
        status: 200
    });
})

router.post("/new", (req, res) => {
    console.log(`req.body is ${req.body}  // auth.js`);
    const username = req.body.username;
    const password = req.body.password;
    var sql = "SELECT * FROM user WHERE username=?";
    const post = [username];
    mysql.query(sql, post, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                error: "db error",
                status: 400
            });
        } else {
            if (results.length === 0) {
                let sql = "INSERT INTO user (usernamem password) VALUES(?,?)";
                let post = [username, password];
                mysql.query(sql, post, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            ok: false,
                            error: "2 db error",
                            status: 400
                        });
                    } else {
                        return res.json({
                            ok: true,
                            error: null,
                            status: 200
                        });
                    }
                })
            } else {
                return res.json({
                    ok: false,
                    error: "existing username",
                    status: 400
                });
            }
        }
    });
});

export default router;