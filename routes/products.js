const  express = require ("express");

const router = express.Router();

const {getAllProducts, getAllProductsTesting,getCategory}= require("../controller/products")
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/category").get(getCategory);



module.exports= router;