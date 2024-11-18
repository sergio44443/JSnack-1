// Chiedi due numeri all'utente
let num1 = parseFloat(prompt("1"));
let num2 = parseFloat(prompt("2"));

// Controlla quale numero è maggiore e stampalo
if (num1 > num2) {
    alert(`Il numero maggiore è: ${num1}`);
} else if (num2 > num1) {
    alert(`Il numero maggiore è: ${num2}`);
} else {
    alert("I due numeri sono uguali.");
}