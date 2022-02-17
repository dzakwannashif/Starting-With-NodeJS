/**
 * 
 * 
 * Routing Dengan Methods
 * 
 */

const http = require("http")

const server = http.createServer((req, res) => {
    let url, // digunakan untuk path url di request
    method, //  digunakan untuk menampung jenis method pada request atau nilai default 
    dataResponse; // data yang akan dikirim

    res.setHeader("Content-Type", "application/json");

    url = req.url;

    //jika method tidak ada isi, maka isi dengan method get 
    method = req.method ?? "get";

    //routing
    if(url === "/"){
        dataResponse = {
            data: "Ini adalah halaman homepage"            
        };
    }else if(url === "/login"){
        // akses untuk ke method post
        if(method === "POST"){
            dataResponse = {
                data: "anda berhasil login dengan menggunakan method POST"
            }
        }else{
            dataResponse = {
                data: "Maaf, ubah terlebih dahulu method menjadi POST"
            }
        }
    }else{
        dataResponse = {
            data: "404, Halaman tidak ditemukan"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(9000)