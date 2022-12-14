/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2) {
    return l1*l2
}
let result = area(11,15)
console.log(area(11,15))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("--------esercizio2---------")



function crazySum(p1 , p2) {
    
   if (p1 === p2) {
    return p1 + p2;
   } else {
    return (p1 + p2) * 3;
   }
}
const x = crazySum( 11 , 10 )
console.log(x)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("-------------esercizio 3-------------")
function crazyDiff(num1) {
    if (num1>19) {
        return (num1/19)
    } else {
        return(num1/19)*3
    }   
}
const y = crazyDiff(30)
console.log(y)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("-------------esercizio 4-------------")



function boundary(numintero) {
    
   if (numintero >= 20 && (numintero <=100) | (numintero === 400)) {
    return true
   } else {
    return false
   }
   
}
const numintero = 5
 console.log(boundary(numintero))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("-------------esercizio 5-------------")

function epify(st) {


    
    if (typeof st === "string" ) {
        return true
    } else {
        ( typeof st !== "string")
        return false
    }
}

const st = "epicode"
console.log(st)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("-------------esercizio 6-------------")
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (number) => {
    if (number % 3 === 0 || number % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log (check3and7(3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("-------------esercizio 7-------------")
/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = (epicode) => {
return epicode.split("").reverse().join("")
}
const inverso = reverseString("epicode")
console.log (inverso)
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("-------------esercizio 8-------------")
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = (string) => {
const parole = string.split(" ")
for (let i = 0; i < parole.length; i++) {
    const primaLettera = parole[i][0].toUpperCase();
    const paroleRestanti = parole[i].slice(1) 
    parole[i] = primaLettera + paroleRestanti
}
return parole.join(" ")
}
const paroleMaiuscole = upperFirst("ciao a tutti")
console.log(paroleMaiuscole)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
