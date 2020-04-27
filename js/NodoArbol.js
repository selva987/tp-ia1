/**
 * Este es el nodo que va en el arbol de resolución
 */

class NodoArbol {
    constructor(nodo, g, padre) {
        this.id = nodo.id;
        if(padre != null) {
            this.id += padre.id;
        }
        this.padre = padre;
        this.nodo = nodo;
        this.g = g;
        this.f = g + nodo.h;
        this.label = nodo.id + ': f\'(' + nodo.id + ') = ' + this.f;
        this.cerrado = false;
        this.hijos = [];
        this.caminosHijos = [];
        if(this.padre == null) {
            this.color = colorRojo;
        }
    }

    /**
     * Expando el nodo, o sea, encuentro los vecinos del nodo
     * y cargo los hijos en el arbol
     * @return [NodoArbol, NodoArbol]
     */
    expandir() {
        let vecinosNodo = this.nodo.getVecinos();
        vecinosNodo.forEach(function(e) {
            //uno de los vecinos puede ser el padre, no lo proceso
            if(this.padre == null || e.nodo.id != this.padre.nodo.id) {
                let hijo = new NodoArbol(e.nodo, (this.g+e.costo), this);
                this.hijos.push(hijo);
                this.caminosHijos.push({from:this.id, to:hijo.id, label: '(' + hijo.g + ')'})
            }
        }, this);

        return this.hijos;
    }

    cerrar() {
        this.cerrado = true;
        this.color = colorAmarillo;
    }

    marcarSolucion(hijo) {
        this.color = colorVerde;
        if(hijo != null) {
            this.caminosHijos[this.hijos.indexOf(hijo)].color = colorVerde;
        }
        if(this.padre != null) this.padre.marcarSolucion(this);
    }

    getStrF() {
        return 'f\'(' + this.nodo.id + ') = ' + this.g + ' + ' + this.nodo.h + ' = ' + this.f;
    }

    getStrCamino() {
        if(this.padre == null) return [this.nodo.id];
        else return [this.nodo.id].concat(this.padre.getStrCamino()).reverse().join(', ');
    }

    getNodosArbol() {

        let retorno = [this];
        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getNodosArbol());
        }, this);

        return retorno;
    }

    getCaminosArbol() {
        let retorno = this.caminosHijos;

        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getCaminosArbol());
        }, this);

        return retorno;
    }

}