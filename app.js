
const  express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;



const product_routes = require("./routes/products");

app.get("/",(req, res)=>  {
    res.send("Hi I am live");
});

const start = async ()=> {
    try{
        app.listen(PORT, () => {
console.log`${PORT} Yes I am connected`;
        });
        // middleware 
        app.use("/api/product", product_routes);

    }catch(error){
        console.log(error);
    }
};
start();