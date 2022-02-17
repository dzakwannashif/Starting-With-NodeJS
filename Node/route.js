/**
 * Routing
*/

const http = require("http");

const server = http.createServer((req, res) => {
    let url,
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url

    // ROUTING
    if(url === "/"){
        dataResponse = {
            data: "ini adalah halaman home page"
        }
    } else if (url === "/login"){
        dataResponse = {
            data: "ini adalah halaman login page"
        }
    } else if (url === "/register"){
        dataResponse = {
            data: "ini adalah halaman register page"
        }
    } else 
    {
        dataResponse = {
            data: "ini adalah halaman Not Found 404 page"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(3000)