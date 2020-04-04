const express = require("express");
const router = express.Router();

// get request
router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"this is get request products"
    });
});

// view product
router.get("/:productId", (req, res, next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: "view product",
        id: id
    });
});
// handle post request
router.post("/", (req, res, next) => {
    const name = req.body.name;
    res.status(200).json({
        message:"post request form products",
        name: name
    });
});

// delete request
router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message:"delete request for products"
    });
});

// edit request for product
router.patch("/:id", (req, res, next) => {
    res.status(200).json({
        message:"edit product"
    });
});

// export product
module.exports = router;