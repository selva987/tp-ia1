//Configuracion de la libreria del arbol
var optionsArbol = {
    autoResize: true,
    height: '100%',
    width: '100%',
    locale: 'es',
    clickToUse: false,
    edges: {
        color: {
            inherit: false,
            color:'#848484',
            highlight:'#848484',
        }
    },        // defined in the edges module.
    layout: {
        hierarchical: {
            direction: 'UD',
            sortMethod: "directed",
            shakeTowards: 'roots'
        }
    },       // defined in the layout module.
    manipulation: {
        enabled: false,
    },
    physics: {
        enabled: false,     // Stops node movement during display
        stabilization: {    // Determines an initial layout; enabled by default
            enabled: true,
            iterations: 1000,
        }
    },
};

//Se inicializa la librería que va a servir de arbol de resolucion
var containerArbol = document.getElementById('arbol');
var dataArbol;
