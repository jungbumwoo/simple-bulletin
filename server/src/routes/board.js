import express from "express";
import mysql from "../db/mysql";
const router = express.Router();

router.get("/:id", (req, res) => {
  if (!req.session.token) {
    return res.json({
      ok: false,
      status: 404,
      error: "unauthorized"
    });
  }
  const bbsId = req.params.id;
  const sql =
    "SELECT b.id, b.title, b.content, u.username FROM board b INNER JOIN user u ON b.writer = u.id WHERE b.id = ?";
  const post = [bbsId];
  mysql.query(sql, post, (err, results, fields) => {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        status: 400,
        error: "db error"
      });
    }
    const board = results[0];
    const sql =
      "SELECT c.id, c.message, u.username FROM comment c INNER JOIN user u ON c.writer = u.id INNER JOIN board b ON c.board = b.id WHERE b.id = ?";
    const post = [bbsId];
    mysql.query(sql, post, (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.json({
          ok: false,
          status: 400,
          error: "db error2"
        });
      }

      const comments = results;
      return res.json({
        board,
        comments
      });
    });
  });
});

export default router;