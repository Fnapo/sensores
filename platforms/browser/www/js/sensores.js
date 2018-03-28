


var app = {
    inicio: function () {
        document.body.className = 'rojo';
        navigator.accelerometer.watchAcceleration(app.siCorrecto, app.siError, { frequency: 1000 });
    },
    
    siError: function () {
        document.alert('Ha ocurrido un error en el acelerometro.');
    },
    
    siCorrecto: function (datosAceleracion) {
        if (document.body.className === '') {
            document.body.className = 'rojo';
        } else {
            document.body.className = '';
        }
        
        app.representaValores(datosAceleracion);
    },
    
    detectaAgitacion: function (datosAcc) {
        var agitaX = Math.abs(datosAcc.x) > 10,
            agitaY = Math.abs(datosAcc.y) > 10;
        if(agitaX || agitaY) {
            document.body.className = 'agitado';
        } else {
            document.body.className = '';
        }
    },
    
    representaValores: function (datosAcc) {
        app.representa(datosAceleracion.x, '#valorx');
        app.representa(datosAceleracion.y, '#valory');
        app.representa(datosAceleracion.z, '#valorz');        
    },
    
    representa: function (dato, elementoHTML) {
        document.querySelector(elementoHTML).innerHTML = dato.toFixed(2);
    }
};

app.inicio();

/*if (document.hasOwnProperty('addEventListener')) {
    document.addEventListener('deviceready', app.inicio, false);
}*/
