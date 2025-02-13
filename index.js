const express = require("express");
const app = express();

// // Redirect all requests to another server
// app.use((req, res) => {
//     res.redirect("http://your-backend-server-ip:3000" + req.url);
// });


app.listen(4000, () => {
    console.log("Running on Port 4000");
});
