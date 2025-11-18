const getAllProducts = async (req, res)=>{
    res.status(200).json({msg: "I am getAllProducts"});

}
const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({msg:"I am getAllProductsTesting"});
}
const getCategory = async (req,res)=>{
    res.status(200).json({msg:
        "I is all Category"});
}
 


module.exports = {getAllProducts, getAllProductsTesting, getCategory};