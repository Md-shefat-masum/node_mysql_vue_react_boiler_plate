const express = require("express");
const { db } = require("../../../config/prisma");
const router = express.Router();

let users = [{ name: "aaa" }, { name: "bbb" }];
module.exports = router
    .get("/users", async (req, res) => {
        let users = await db.UserRole.findMany({
            include: {
                users: true,
            },
        });
        res.json(users);
    })
    .get("/users/:id", async (req, res) => {
        res.json(users[0]);
    })
    .post("/users", async (req, res) => {
        res.json(users);
    })
    .put("/users", async (req, res) => {
        res.json(users);
    })
    .delete("/users/:id", async (req, res) => {
        res.json(users);
    });
