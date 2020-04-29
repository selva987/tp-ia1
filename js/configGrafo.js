//Configuracion de la libreria
var optionsGrafo = {
    autoResize: true,
    height: '100%',
    width: '100%',
    locale: 'es',
    // locales: locales,
    clickToUse: false,
    // configure: {enabled:true},    // defined in the configure module.
    edges: {
        color: {
            inherit: false,
            color:'#848484',
            highlight:'#848484',
        }
    },        // defined in the edges module.
    // nodes: {...},        // defined in the nodes module.
    // groups: {...},       // defined in the groups module.
    // layout: {...},       // defined in the layout module.
    // interaction: {...},  // defined in the interaction module.
    manipulation: {
        enabled: false,
        initiallyActive: false,
        addNode: function (node, callback) {
            //codigo legacy a menos que quisieramos utilizar botones
            setLabel('');
            let label = getLetraDisponible();
            if(label == null) return false;
            node.label = label;
            callback(node);
        },
        addEdge: function (edge, callback) {
            setLabel('');
            let peso = null;
            let arrNombre = [edge.from, edge.to];

            while(peso == null) {
                peso = prompt('Ingrese el peso de la ruta, solo se admiten números enteros', 0);
                if(!peso || peso == '0') {
                    networkGrafo.disableEditMode();
                    return false;
                }

                peso = parseInt(peso);

                if(!Number.isInteger(peso)) {
                    peso = null;
                }
            }

            edge.label = peso.toString();
            edge.peso = peso;
            edge.id = arrNombre.sort().join('');

            if(dataGrafo.edges.get(edge.id)) {
                alert('Los nodos ya están conectados');
                networkGrafo.disableEditMode();
                return false;
            }

            callback(edge);
        },
        editEdge: true,
        deleteNode: true,
        deleteEdge: true,
        controlNodeStyle:{
            // all node options are valid.
        }
    },
    // physics: {...},      // defined in the physics module.
    physics: {
        enabled: false,     // Stops node movement during display
        stabilization: {    // Determines an initial layout; enabled by default
            enabled: true,
            iterations: 1000
        }
    },
};

var container = document.getElementById('grafo');

// var dataGrafo = {
//     nodes: new MiDataSet( null, function (e) {
//         return new NodoGrafo(e.id, e.h, e.x, e.y, e.inicio, e.fin);
//     }),
//     edges: new vis.DataSet(null)
// };
// grafo grande
var dataGrafo = {
    nodes: new MiDataSet( grafoPractica.nodes, function (e) {
        return new NodoGrafo(e.id, e.h, e.x, e.y, e.inicio, e.fin);
    }),
    edges: new vis.DataSet(grafoPractica.edges)
};

var networkGrafo = new vis.Network(container, dataGrafo, optionsGrafo);

//Manejo del menu contextual que hicimos
networkGrafo.on("oncontext", function (params) {
    params.event.preventDefault();
    $('#context-menu button').hide();

    //Depende de donde se clickeo se va a seleccionar lo que haya y mostrar
    //las opciones adecuadas en el menu
    let nodoID = networkGrafo.getNodeAt(params.pointer.DOM);
    if(typeof nodoID !== 'undefined') {
        networkGrafo.selectNodes([nodoID]);
        $('#agregar-camino').show();
        $('#editar-nodo').show();
        $('#eliminar-nodo').show();
        $('#marcar-inicio').show();
        $('#marcar-fin').show();
    } else {
        let rutaID = networkGrafo.getEdgeAt(params.pointer.DOM);
        if(typeof rutaID !== 'undefined') {
            networkGrafo.selectEdges([rutaID]);
            $('#eliminar-camino').show();
        } else {
            $('#agregar-nodo').show();
            $('#agregar-camino').show();
        }
    }

    networkGrafo.on('dragEnd', function(params){
        if(params.nodes.length > 0) {
            let nodes = dataGrafo.nodes.get(params.nodes);
            nodes[0].x = params.pointer.canvas.x;
            nodes[0].y = params.pointer.canvas.y;

            dataGrafo.nodes.update(nodes[0]);

            if(opciones.calcularH) {
                recalcularH();
            }
        }
    });

    //Guardo las coordenadas para usarlas en otras funciones
    menuX = params.pointer.canvas.x;
    menuY = params.pointer.canvas.y;

    //Acomodo el menu donde tiene que ir y lo muestro
    $("#context-menu").finish().toggle(100);
    $("#context-menu").css({
        top: params.event.pageY + "px",
        left: params.event.pageX + "px"
    });
});

//Si hago click en otro lado escondo el menu
networkGrafo.on("click", function(params) {
    $("#context-menu").removeClass("show").hide();
});

networkGrafo.on('resize', function(params) {
    networkGrafo.fit();
});

$(document).on("click", function() {
    $("#context-menu").removeClass("show").hide();
});
