/**
 * Este es el nodo que va en el arbol de resolución
 */

class NodoArbol extends ElementoGrafico{
    constructor(nodo, g, padre, t) {
        super(nodo.id, '');
        this.t = t;
        if(padre != null) {
            this.id += padre.id;
        }
        this.padre = padre;
        this.nodo = nodo;
        this.g = g;
        this.f = g + nodo.h;
        this.label = nodo.id + '\n f\'(' + nodo.id + ') = ' + this.f;
        this.tCerrado = null;
        this.hijos = [];
        this.caminosHijos = [];
        this.caminoSolucion = false;
        if(this.padre == null) {
            this.color = colorRojo;
        }
    }

    /**
     * Expando el nodo, o sea, encuentro los vecinos del nodo
     * y cargo los hijos en el arbol
     * @return [NodoArbol, NodoArbol]
     */
    expandir(t) {
        let vecinosNodo = this.nodo.getVecinos();
        if(vecinosNodo.length > 0) {
            vecinosNodo.sort(function (a, b) {
                if(a.nodo.id < b.nodo.id) return -1;
                if(a.nodo.id == b.nodo.id) return 0;
                return 1;
            });
        }
        vecinosNodo.forEach(function(e) {
            //uno de los vecinos puede ser el padre, no lo proceso
            if(this.padre == null || e.nodo.id != this.padre.nodo.id) {
                let hijo = new NodoArbol(e.nodo, (this.g+e.costo), this, t);
                this.hijos.push(hijo);
                this.caminosHijos.push({from:this.id, to:hijo.id, label: '(' + hijo.g + ')'})
            }
        }, this);

        return this.hijos;
    }

    cerrar(t, cerrarHijos) {
        //esto es para evitar que al cerrar un nodo padre
        // se sobreescriba el t en que se cerro originalmente
        if(this.tCerrado != null && this.tCerrado < t) return;
        // this.label += '('+t+')';
        this.tCerrado = t;
        this.color = colorAmarillo;
        if(cerrarHijos) {
            this.hijos.forEach(function (e) {
                e.cerrar(t);
            }, this);
        }
    }

    marcarColor(t, marcarSolucion) {
        this.hijos.forEach(function (e) {
            e.marcarColor(t, marcarSolucion);
        }, this);
        if(marcarSolucion && this.caminoSolucion) {
            this.color = colorVerde;
            return;
        }
        if(this.tCerrado != null && t >= this.tCerrado) {
            this.color = colorAmarillo;
            return;
        }
        this.color = colorAzul;
    }

    getStrF() {
        return 'f\'(' + this.nodo.id + ') = ' + this.g + ' + ' + this.nodo.h + ' = ' + this.f;
    }

    getStrCamino() {
        this.caminoSolucion = true;
        if(this.padre == null) return [this.nodo.id];
        else return [this.nodo.id].concat(this.padre.getStrCamino()).reverse().join(', ');
    }

    getNodosArbol(t) {
        // debugger;
        if(this.t > t) return [];
        let retorno = [this];
        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getNodosArbol(t));
        }, this);

        return retorno;
    }

    getCaminosArbol(t) {
        if(this.t > t) return [];
        let retorno = this.caminosHijos;

        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getCaminosArbol(t));
        }, this);

        return retorno;
    }

}