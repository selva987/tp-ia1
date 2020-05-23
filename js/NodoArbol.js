/**
 * Esta es la clase del nodo que va en el arbol de resolución
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
            //uno de los vecinos puede ser ancestro, no lo proceso
            if(this.padre == null || !this.padre.esNodoAncestro(e.nodo)) {
                let hijo = new NodoArbol(e.nodo, (this.g+e.costo), this, t);
                this.hijos.push(hijo);
                this.caminosHijos.push({from:this.id, to:hijo.id, label: '(' + hijo.g + ')'})
            }
        }, this);

        return this.hijos;
    }

    /**
     * Recorre hacia arriba el arbol preguntando si es ancestro (corresponde al mismo nodo grafo)
     * @param nodo NodoGrafo
     * @returns {boolean}
     */

    esNodoAncestro(nodo) {
        //Si mi nodo es el mismo, entonces soy el ancestro
        if(this.nodo.id == nodo.id) return true;

        if(this.padre != null) {
            //Si tengo padre le pregunto a el si es ancestro
            return this.padre.esNodoAncestro(nodo);
        } else {
            //Si no tengo padre soy la raiz, y si llegue hasta aca es porque no hubo coincidencia
            //por lo tanto no es ancestro
            return false;
        }
    }

    /**
     * Marca el nodo como cerrado y el t en que se cerró, puede marcar a sus hijos
     * Devuelve un array con los nodos que se cerraron
     */
    cerrar(t, cerrarHijos) {
        let retorno = [];
        //esto es para evitar que al cerrar un nodo padre
        // se sobreescriba el t en que se cerro originalmente
        if(this.tCerrado == null) {
            // this.label += '(' + t + ')';
            this.tCerrado = t;
            this.color = colorAmarillo;
            retorno.push(this);
        }
        if(cerrarHijos) {
            this.hijos.forEach(function (e) {
                let hijosCerrados = e.cerrar(t, true);
                hijosCerrados.forEach(function (e) {
                    retorno.push(e);
                });
            }, this);
        }

        return retorno;
    }

    /**
     * Elige el color del nodo en base a su estado y t
     */
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

    /**
     * Devuelve la descripción de la funcion f
     * @returns {string}
     */
    getStrF() {
        return 'f\'(' + this.nodo.id + ') = ' + this.g + ' + ' + this.nodo.h + ' = ' + this.f;
    }

    /**
     * Devuelve el camino de la solución, marcando como solución los nodos que lo sean
     * @returns {string}
     */
    getStrCamino() {
        this.caminoSolucion = true;
        if(this.padre == null) return [this.nodo.id];
        else return [this.nodo.id].concat(this.padre.getStrCamino()).reverse().join(', ');
    }

    /**
     * Devuelve todos los nodos del arbol debajo del nodo
     * @param t
     * @returns [NodoArbol]
     */

    getNodosArbol(t) {
        // debugger;
        if(this.t > t) return [];
        let retorno = [this];
        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getNodosArbol(t));
        }, this);

        return retorno;
    }

    /**
     * Devuelve todos los caminos del arbol debajo del nodo
     * @param t
     * @returns [Camino]
     */
    getCaminosArbol(t) {
        if(this.t > t) return [];
        let retorno = this.caminosHijos;

        this.hijos.forEach(function (e) {
            retorno = retorno.concat(e.getCaminosArbol(t));
        }, this);

        return retorno;
    }

}