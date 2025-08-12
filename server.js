import express from "express";
import axios from "axios";
const app = express();


app.get("/", async (req, res) => {
    try {
        const result = await axios.get('https://api.ipify.org?format=json')

        res.send(`Hello World! Your public IPv4 is = ${result.data.ip}`);
    } catch (error) {
        res.send(`Error: ${error.message}`);
    }
})



app.listen(3000, () => {
    console.log(`Server is running on http://127.0.0.1:3000`);
});