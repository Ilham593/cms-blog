import jwt from "jsonwebtoken";
import User from "../models/User.js";
const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const btoken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(btoken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (user.username !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
