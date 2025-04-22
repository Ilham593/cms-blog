// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import express from "express";
// import e from "express";
// const router = express.Router();

// // login ruuter

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: "Please fill in all fields" });
//   }

//   try {
//     const user = await user.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: "user not found" });
//     }

//     // bandingakn password dengan hash password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, username: user.username },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

// export default router;
