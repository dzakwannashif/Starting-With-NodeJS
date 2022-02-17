const dzakwan = require("http")

const nashif = dzakwan.createServer((req, res) => {
    let url,
    method,
    dataResponse;

    res.setHeader("Content-Type", "application/json");

    url = req.url;

    method = req.method ?? "get";

    if(url === "/"){
        dataResponse = {
            data: "HomePage"
        }
    } else if(url === "/login"){
        if(method === "POST"){
            dataResponse = {
                data: "anda berhasil menambahkan data"
            }
        } else{
            dataResponse = {
                data: "anda harus mengubah method menjadi POST"
            }
        }
    } else if(url === "/about"){
        dataResponse ={
            data: "AboutPage"
        }
    } else{
        dataResponse = {
            data: "404, Not Found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

nashif.listen(4000)