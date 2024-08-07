import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(req.url);
    if (req.url === "/users") {
        res.end(JSON.stringify([{ name: "John Doe" }, { name: "Alex Doe" }]));
    }
    if (req.url === "/products") {
        res.end(
            JSON.stringify([
                { name: "Iphone 15" },
                { name: "Samsung galaxy S21" },
            ])
        );
    }
    // res.end("Route not found");
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// console.log(process.env.PORT || 5000);
