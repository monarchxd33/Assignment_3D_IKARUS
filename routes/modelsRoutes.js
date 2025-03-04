const express = require("express");
const { getModels, uploadModel } = require("../controllers/modelsController");

const router = express.Router();

router.get("/models", getModels);
router.post("/upload", uploadModel);

module.exports = router;