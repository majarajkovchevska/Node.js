const express = require("express");
const app = express();
app.get("/app/:ime", (req, res) => {


    const karakteri = req.params.ime.length;
    const parniKarakteri = req.params.ime.length % 2 == 0 ? `Paren broj karakteri: da` : `Paren broj karakteri:ne`;
    const samoglaski = ["a", "e", "i", "o", "u"];

    let brojNaSamoglaski = 0;
    for (let i = 0; i < req.params.ime.length; i++) {
        let karakterOdIme = req.params.ime[i]
        if (samoglaski.includes(karakterOdIme)) {
            brojNaSamoglaski++;
        }
    }
    const brojNaSoglaski = req.params.ime.length - brojNaSamoglaski;

    return res.send(`Imeto ${req.params.ime} ima ${karakteri} karakteri od koi ${brojNaSoglaski} se soglaski, a ${brojNaSamoglaski} se  samoglaski,${parniKarakteri}`)


});


app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log("Server started successfully on port 10000");
});