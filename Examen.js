const esPalindromo = (texto) =>{
    texto = texto.toLowerCase();
    let izquierda = 0, derecha = texto.length - 1 ;
    while (izquierda < derecha) {
        !esAlfanumerico(texto[izquierda])? izquierda++ :false;
        !esAlfanumerico(texto[derecha])? derecha-- :false;
        texto[izquierda] !== texto[derecha]?false : true;
        izquierda++, derecha--;
    }
    return true; 
}
const esAlfanumerico = (/[a-z0-9]/.test(caracter));
esPalindromo("Anita lava la tinaa")?console.log("Es un palindromo"):console.log("No es un palindromo");