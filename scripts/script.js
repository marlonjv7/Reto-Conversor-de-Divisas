import {data} from '../data/data.js';

data.forEach(Conversor => {
    const {Dolar, Peso_Mexicano, Peso_Colombiano, Euro, Libra_Esterlina} = Conversor
});

console.log(data);

let boton = document.getElementById('butt');
boton.addEventListener('click', datos);
boton.setAttribute("name", "Cambiar");



    let Cant = document.getElementById('CantConver').value;
    let M_De = document.getElementById('De').value;
    let M_A = document.getElementById('A').value;
    let resultado = 0;


function datos(){
    // dolar a peso mexicano
    if (M_De == 1 && M_A == 2)
    {
        resultado = Cant * Peso_Mexicano;
    }
    // dolar a peso colombiano
    else if (M_De == 1 && M_A == 3)
    {
        resultado = Cant * Peso_Colombiano;
    }
    // dolar a euro
    else if (M_De == 1 && M_A == 4) 
    {
        resultado = Cant * Euro;
    }
    // dolar a libra esterlina
    else if (M_De == 1 && M_A == 5) 
    {
        resultado = Cant * Libra_Esterlina;
    }

    // peso mexicano a dolar  
    else if (M_De == 2 && M_A == 1)
    {
        resultado = Cant * Peso_Mexicano;
    }
    // peso mexicano a peso colombiano
    else if (M_De == 2 && M_A == 3)
    {
        resultado = Cant * Peso_Colombiano;
    }
    // peso mexicano a euro
    else if (M_De == 2 && M_A == 4) 
    {
        resultado = Cant * Euro;
    }
    // peso mexicano a libra esterlina
    else if (M_De == 2 && M_A == 5) 
    {
        resultado = Cant * Libra_Esterlina;
    }
    
    // peso colombiano a dolar  
    else if (M_De == 3 && M_A == 1)
    {
        resultado = Cant * Peso_Mexicano;
    }
    // peso colombiano a peso mexicano
    else if (M_De == 3 && M_A == 2)
    {
        resultado = Cant * Peso_Colombiano;
    }
    // peso colombiano a euro
    else if (M_De == 3 && M_A == 4) 
    {
        resultado = Cant * Euro;
    }
    // peso colombiano a libra esterlina
    else if (M_De == 3 && M_A == 5) 
    {
        resultado = Cant * Libra_Esterlina;
    }

    // euro a dolar  
    else if (M_De == 4 && M_A == 1)
    {
        resultado = Cant * Peso_Mexicano;
    }
    // euro a peso mexicano
    else if (M_De == 4 && M_A == 2)
    {
        resultado = Cant * Peso_Colombiano;
    }
    // euro a peso colombiano
    else if (M_De == 4 && M_A == 3) 
    {
        resultado = Cant * Euro;
    }
    // euro a libra esterlina
    else if (M_De == 4 && M_A == 5) 
    {
        resultado = Cant * Libra_Esterlina;
    }

    // libra esterlina a dolar  
    else if (M_De == 5 && M_A == 1)
    {
        resultado = Cant * Peso_Mexicano;
    }
    // libra esterlina a peso mexicano
    else if (M_De == 5 && M_A == 2)
    {
        resultado = Cant * Peso_Colombiano;
    }
    // libra esterlina a peso colombiano
    else if (M_De == 5 && M_A == 3) 
    {
        resultado = Cant * Euro;
    }
    // libra esterlina a euro
    else if (M_De == 5 && M_A == 4) 
    {
        resultado = Cant * Libra_Esterlina;
    }
    // dolar a dolar, peso mexicano a peso mexicano, peso colombiano a peso colombiano, euro a euro, libra esterlina a libra esterlina
    else {
        resultado = Cant;
    }
    
};
alert('Resultado: ' + resultado.toFixed(2));

let result = document.getElementById('Result');
let R = document.createDocumentFragment();
let SR = ['Resultado:'];

SR.forEach(function(SRj) {
    let li = document.createElement('li');
    li. textContent = SRj;
    R.appendChild(li);
});

result.appendChild(R);

console.log(isNaN(resultado));
console.log(isNaN(Cant));
console.log(isNaN(data));