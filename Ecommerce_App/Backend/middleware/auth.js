const jwt=require("jsonwebtoken");

require("dotenv").config();

function authMiddleware(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token) return res.status(401).json({ error: "Access denied. Invalid Token." });
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }   catch(err){
        console.error("JWT Error:", err.message);
        res.status(403).json({ error: "Invalid or expired token" });
    }   
    
}

module.exports = authMiddleware;