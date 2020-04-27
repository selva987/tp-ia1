/**
 * Este es el nodo del grafo que se dibuja
 */
class NodoGrafo {

    constructor(id, h, x, y, inicio, fin) {
        this.id = id;
        this.setH(h);
        this.x = x;
        this.y = y;
        this.setInicio(inicio);
        this.setFin(fin);
        this.vecinos = null;
    }

    setH(h) {
        this.h = h;
        this.label = this.id + ': ' + (this.h != null ? this.h : '???');
    }

    setInicio(valor) {
        this.inicio = valor;
        if(valor) {
            if(this.fin) {
                this.color = colorAmarillo;
            } else {
                this.color = colorRojo;
            }
        } else {
            if(this.fin) {
                this.color = colorVerde;
            } else {
                this.color = colorAzul;
            }
        }
    }


    setFin(valor) {
        this.fin = valor;
        if(valor) {
            this.setH(0);
            if(this.inicio) {
                this.color = colorAmarillo;
            } else {
                this.color = colorVerde;
            }
        } else {
            if(this.inicio) {
                this.color = colorRojo;
            } else {
                this.color = colorAzul;
            }

        }
    }

    /**
     * Devuelve vecinos del nodo, si no los tengo calculados, calculo
     * @returns [{costo:int,nodo:NodoGrafo}]
     */

    getVecinos() {
        if(this.vecinos == null) {
            //Si todavia no habia calculado mis vecinos, lo hago
            let caminos = dataGrafo.edges.get(networkGrafo.getConnectedEdges(this.id));
            this.vecinos = [];
            if(caminos.length > 0) {
                caminos.forEach(function(e) {
                    //Cada camino tiene las propiedades from, to, peso, como no sabemos
                    //la direccion del camino tenemos que ver si el siguiente esta en from o to
                    if(e.from == this.id) {
                        this.vecinos.push({
                            costo: e.peso,
                            nodo: dataGrafo.nodes.get(e.to)
                        });
                    } else {
                        this.vecinos.push({
                            costo: e.peso,
                            nodo: dataGrafo.nodes.get(e.from)
                        });
                    }
                }, this);
            }
        }
        return this.vecinos;
    }
}

var colorAzul = {
    border: '#2B7CE9',
    background: '#97C2FC',
    highlight: {
        border: '#2B7CE9',
        background: '#D2E5FF'
    }
};

var colorRojo = {
    border: '#f5c6cb',
    background: '#f8d7da',
    highlight: {
        border: '#dc3545',
        background: '#dc3545'
    }
};

var colorVerde = {
    border: '#c3e6cb',
    background: '#d4edda',
    highlight: {
        border: '#28a745',
        background: '#28a745'
    }
};

var colorAmarillo = {
    border: '#ffeeba',
    background: '#ffeeba',
    highlight: {
        border: '#ffc107',
        background: '#ffc107'
    }
};