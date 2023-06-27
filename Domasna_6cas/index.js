const http = require("http");
const handler = (req, res) => {
    // console.log(req.url.split("/"));
    const [_, path, ime] = req.url.split("/")

    const karakteri = ime.length;
    const parniKarakteri = ime.length % 2 == 0 ? `Paren broj karakteri: da` : `Paren broj karakteri:ne`;
    const samoglaski = ["a", "e", "i", "o", "u"];

    let brojNaSamoglaski = 0;
    for (let i = 0; i < ime.length; i++) {
        let karakterOdIme = ime[i]
        if (samoglaski.includes(karakterOdIme)) {
            brojNaSamoglaski++;
        }
    }
    const brojNaSoglaski = ime.length - brojNaSamoglaski;

    res.end(`Imeto ${ime} ima ${karakteri} karakteri od koi ${brojNaSoglaski} se soglaski, a ${brojNaSamoglaski} se  samoglaski,${parniKarakteri}`)
}

const server = http.createServer(handler)
server.listen(10000, (err) => {
    if (err) console.log("error");
    console.log("server started on port 10000");
})