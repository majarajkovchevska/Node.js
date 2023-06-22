//! DA PROCHITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrishite fajl, kako da preimenuvatefajls
//? i uste eden po zelba
//? isto taka da kreirate fajl
//? i da prochitate fajl

//!Kreiranje fajl
const fs = require("fs")

const newFile = "Nov fajl"
fs.writeFile("./newfile.txt", newFile, "utf-8", (err) => {
    if (err) {
        return console.log('ERROR')
    }
    console.log("File created")
})

//! Preimenuvanje na fajl

fs.rename("newfile.txt", "novfajl.txt", () => console.log("Preimenuvan file"))

//! Citanje na file
fs.readFile("./citanje.txt", "utf-8", (err, text) => {
    if (err) {
        return (console.log("Greska vo vcituvanje"))
    }
    console.log(text)
})

//!Brisenje na fajl

fs.unlink("./newfile", (err) => {
    if (err) {
        console.log("Greksa");
    }
    console.log("Uspecno izbrisan fajl")

})




fs.unlink("./studenti.json", (err) => {
    if (err) {
        console.log("neuspesno")
    }
    console.log("Uspesno izbrisano")
})
