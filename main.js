let cantidad = document.getElementById('cantidad'); 
let botont = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar')

const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const caracteresEspeciales = '!@#$%^&*()';

const cadenaCaracteres = letrasMayusculas + letrasMinusculas + numeros + caracteresEspeciales;

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
   
    if( numeroDigitado < 8){
        alert("La contraseña es Débil. La cantidad de caracteres tiene que ser mayor que 8");
        resultado.value = "Débil",
        contrasña.value = '';
        return;
    }
    let password = '';
    password += letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
    password += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    for (let i=4; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;

    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    contrasena.value = password;
    evaluarfuerza(password);
}

function evaluarfuerza(password){
    let esFuerte = true;

    if (password.length < 12) esFuerte = false;

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (!tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneCaracterEspecial) {
        esFuerte = false;
    }

    resultado.value = esFuerte ? "Fuerte" : "Débil";
    if (esFuerte) {
        alert("¡La contraseña es fuerte!");
    }
}

function limpiarcampos(){
    document.getElementById('cantidad').value = '';
    document.getElementById('contrasena').value = '';

}





