import express from "express";

const app = express();

import {publicIp, publicIpv4, publicIpv6} from 'public-ip';

app.get("/", async (req, res) => {
try {
        const v4 = await publicIpv4()
    const v6 = await publicIpv6()
    console.log(`Public IPv4: ${v4}, Public IPv6: ${v6}`);

    res.send(`Hello World! Your public IPv4 is ${v4} and your public IPv6 is ${v6}`);
} catch (error) {
    res.send(`Error: ${error.message}`);
}
})



app.listen(3000, () => {
  console.log(`Server is running on http://127.0.0.1:3000`);
});