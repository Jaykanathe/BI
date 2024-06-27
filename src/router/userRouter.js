const router = require('express').Router();
const multer = require('multer');

const userRegisterController = require("../controllers/userRegisterController");

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./uploads");
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname + "-" + Date.now() + "jpg");
        }
    })
}).single("image");


router.post("/register", upload, userRegisterController.userRegisterController,);

router.get("/check", async (req, res) => {


    res.send("user routes is working");
})

module.exports = router;


