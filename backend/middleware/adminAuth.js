const jwt = require("jsonwebtoken");
const adminAuth = async (req,res,next)=>{
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({success: false, message: "not authorized"})
        }
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
        if(tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "not authorized"})
        }
        next();
    }
    catch(err){
        console.log(err);
        res.json({success: false, message: err.message})
    }
}
module.export = adminAuth;
