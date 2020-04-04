const express = require("express");

const router = express.Router();

// get request order
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "order get request"
    });
});

// get single order detail
router.get("/:id", (req,res, next) => {
    res.status(200).json({
        message: "get single order"
    });
});

// create order
router.post("/", (req, res, next) => {
    res.status(200).json({
        message:"create order"
    });
});

// delete order
router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message: "order delete"
    });
});  

module.exports = router;