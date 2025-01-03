
// Oppgave 1



// function summere () {

//     let num1 = parseFloat(prompt("Skriv nummer 1"))
//     let num2 = parseFloat(prompt("Skriv nummer 2"))
//     let num3 = parseFloat(prompt("Skriv nummer 3"))

//     return num1 + num2 + num3

// }

// let resultat = summere();

// console.log(`Summen av tallene: ` + resultat)



// Oppgave 2



// function sammenligne () {

//     let nummer1 = Math.round(Math.random()*10)
//     let nummer2 = Math.round(Math.random()*10)

//     if (nummer1 > nummer2) {

//         console.log(`${nummer1} er store enn ${nummer2}`)

//     } else if (nummer1 < nummer2) {

//         console.log(`${nummer1} er mindre enn ${nummer2}`);

//     } else {

//         console.log(`${nummer1} og ${nummer2} er like`);

//     }

//     return (nummer1, nummer2)

// }

// sammenligne()



// Oppgave 3



// function calc() {

//     let tall1 = parseFloat(prompt("Skriv tall 1"))
//     let tall2 = parseFloat(prompt("Skriv tall 2"))

//     let ope = prompt("Hva vil du gjore")

//     if (ope === "+") {
//         return (tall1 + tall2)
//     } else if (ope === "-") {
//         return (tall1 - tall2)
//     } else if (ope === "*") {
//         return (tall1 * tall2)
//     } else {
//         return (tall1 / tall2)
//     }
// }

// console.log(calc());



// Oppgave 4



// function generertTall() {

//     const tall1 = Number(prompt(' Skriv et tall'))
//     const tall2 = Number(prompt(' Skriv et tall til'))

//     while (true) {

//         let randomNumber = Math.round(Math.random()*100)

//         if (randomNumber < tall1 || randomNumber > tall2) {

//             console.log(`Tallet ${randomNumber} er uriktig`);
            
//         } else {

//             return (randomNumber)
//             break;

//         }

//         break

//     }

// }

// console.log(generertTall())



// Oppgave 5



// function genererFlereTall() {

//     let sum = 0
//     let tallene = []

//     for (let i = 0; i < 10; i++) {

//         let taller = Math.round(Math.random()*20);
//         tallene.push(taller)
//         sum += taller
        
//     }

//     console.log(`De tilfeldige tallene er: ` + tallene.join(",") + ". Summen er " + sum)

// }

// genererFlereTall()



// Oppgave 6



function gjettetall() {
    
    let mittTall = Math.round(Math.random()*100)

    while (true) {
        
        let brukerenstall = Number(prompt("Skriv et tall: "))

        if (mittTall === brukerenstall) {

            console.log(`Gratulerer! Du gjettet riktig.`)
            break

        } else if (mittTall > brukerenstall) {

            console.log(`Mitt tall er høyere`)

        } else {

            console.log(`Mitt tall er lavere`)

        }
        
        

    }

}

gjettetall()