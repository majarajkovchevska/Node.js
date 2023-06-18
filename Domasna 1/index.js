//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid
//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
//? 7.Da se izbrishe prviot student vo studentite
//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)

const studenti = [
    { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
    { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
    { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
    { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
    { ime: "Simona", prosek: 7, grad: "Ohrid" },
    { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
    { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
    { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
    { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];

//* Zadaca 1 

const newlist = studenti.filter((obj) => obj.ime.endsWith('a') && obj.prosek > 7).sort((a, b) => a.ime.length - b.ime.length);

console.log(newlist);

//* Zadaca 2

const zadacaDva = studenti.filter((obj) => obj.prosek > 9 && obj.grad != "Skopje").sort((a, b) => b.prosek - a.prosek)
console.log(zadacaDva)

//* Zadaca 3

const zadacatri = studenti.filter((obj) => obj.ime.length == 5).sort((a, b) => b.prosek - a.prosek)
console.log(zadacatri)

//* Zadaca 4

const zadacaCetiri = studenti.filter((obj) => obj.grad == "Kumanovo")

const average = zadacaCetiri.reduce((acc, s) => acc + s.prosek, 0) / zadacaCetiri.length;

console.log(average);


//* Zadaca 5

const zadacaPet = studenti.filter((obj) => obj.grad == "Skopje" || obj.grad == "Ohrid")
console.log(zadacaPet)
const averagePet = zadacaPet.reduce((acc, s) => acc + s.prosek, 0) / zadacaPet.length;
console.log(averagePet)

//* Zadaca 6

studenti.push({ ime: "Goran", prosek: 7.6, grad: "Delcevo" })
console.log(studenti)

//* Zadaca 7

studenti.shift()
console.log(studenti)

//* Zadaca 8

const newArray = studenti.map((obj) => {

    if (obj.grad == "Kumanovo" || obj.grad == "Ohrid") {
        return { ...obj, prosek: obj.prosek + 1 }
    }
    return obj
})

console.log(newArray)