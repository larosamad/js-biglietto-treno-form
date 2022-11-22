/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */



function finalticket(){
    let nameSurname = document.getElementById('namesurname').value 

    let prezzoPerKm = 0.21

    let kmValue = document.getElementById('km').value
    console.log(kmValue)

    let eta = document.getElementById('eta').value

    let prezzoBiglietto = prezzoPerKm * kmValue
    if(eta == 'minor'){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 20)
    } else if(eta == 'old'){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 40)
    } else{
        prezzoBiglietto = prezzoBiglietto
    }



    document.getElementById('result').innerHTML = `Mio car3 ${nameSurname} il tuo biglietto costa ${prezzoBiglietto.toFixed(2)}
    la tua carrozza è ${getRandomInt(1, 9)}. Il tuo codice CP è ${getRandomInt(1000, 9999)}`

};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

