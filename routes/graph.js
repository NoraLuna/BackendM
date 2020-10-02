const router = require("express").Router();
const { catchErrors } = require("../handlers/errorhandlers");
const graphicsController = require("../controllers/graphicsController");
router.post("/register", catchErrors(graphicsController.register));
router.get("/graph", catchErrors(graphicsController.getAllVentas));
module.exports = router;