/**
 * Esta es la clase que implementa el algoritmo A*
 * Se encarga de encontrar el mejor camino, armar el arbol y el log
 */

class AEstrella {
    constructor(nodos) {
        this.log = [];
        //cargo inicio y fin
        nodos.forEach(function(e) {
            if(e.inicio) this.inicio = e;
            if(e.fin) this.fin = e;
            e.vecinos = null;
        }, this);
    }

    /**
     * Funcion que corre el algoritmo A*
     */
    resolver() {
        let t = 0;
        //creo el nodo inicial del arbol
        this.inicioArbol = new NodoArbol(this.inicio, 0, null, t);
        this.lineaLog(t, 'Agrego el nodo inicial');
        this.lineaLog(t, this.inicioArbol.getStrF());
        this.abiertos = [this.inicioArbol];
        this.cerrados = []
        let solucion = null;
        let minimo;
        let nuevosNodos;
        while(true) {
            t++;
            //Si no tengo mas nodos abiertos, termino y me quedo con la solucion que tenga, si es que hay
            if(this.abiertos.length == 0) {
                break;
            }

            //Recorro los nodos abiertos y selecciono el nodo a expandir, o sea, el minimo f
            minimo = null;
            this.abiertos.forEach(function (e) {
                //Si el nodo es objetivo, comparo con mi solucion anterior,
                // si es mejor lo guardo
                if(e.nodo.fin) {
                    if(solucion == null || e.f < solucion.f) solucion = e;
                }

                //Si es mejor que el mejor que tengo hasta ahora, lo guardo
                if(minimo == null || e.f < minimo.f) minimo = e;
            }, this);
            //Termine de recorrer los abiertos

            //Si el nodo seleccionado es minimo y es la solucion, terminé, sino sigo
            if(minimo.nodo.fin && minimo == solucion) {
                this.lineaLog(t, 'El nodo ' + minimo.nodo.id + ' con f\' = ' + minimo.f + ' es el nodo final y el mejor de los abiertos, por lo tanto es la solucion');
                break;
            } else {
                this.lineaLog(t, 'El nodo ' + minimo.nodo.id + ' con f\' = ' + minimo.f + ' es el minimo, así que lo expando');
                //el nodo que esta en minimo es el que voy a expandir, asi que lo quito de mis abiertos y lo agrego a cerrados
                this.abiertos.splice(this.abiertos.indexOf(minimo),1);
                this.cerrados.push(minimo);

                //expando y tengo los nuevos nodos
                nuevosNodos = minimo.expandir(t);
                minimo.cerrar(t, false);
                //Agrego al log el detalle de los nuevos nodos
                nuevosNodos.forEach(function (e) {this.lineaLog(t,e.getStrF())}, this);

                //ahora que tengo nuevos nodos me fijo si puedo cerrar algunos
                nuevosNodos = nuevosNodos.filter(function(n) {
                    //filter es una funcion que recorre el array y devuelve los elementos
                    //de las iteraciones en las que devuelvo true
                    let mantenerNuevo = true;
                    this.abiertos = this.abiertos.filter(function (a) {
                        //Si son del mismo nodo, comparo y cierro el que corresponda
                        if(n.nodo.id == a.nodo.id) {
                            //si un nodo abierto coincide con un nuevo, lo comparo y dejo
                            //el mejor, si son iguales dejo ambos
                            if(a.f > n.f) {
                                this.lineaLog(t, 'Cierro el nodo ' + a.nodo.id + ' con f\' = ' + a.f)
                                a.cerrar(t, true);
                                this.cerrados.push(a);
                                return false;
                            } else if(a.f != n.f) {
                                this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f)
                                n.cerrar(t, true);
                                this.cerrados.push(n);
                                mantenerNuevo = false;
                            }
                        }
                        return true;
                    }, this);
                    return mantenerNuevo;
                }, this);

                //finalmente guardo en la lista de abiertos los nodos nuevos que me quedaron
                nuevosNodos.forEach(function(e){this.abiertos.push(e);}, this);
            }
        }
        //Termine de explorar, hora de ver si tengo o no solucion
        this.t = t;
        if(solucion == null) {
            this.lineaLog(t, 'No se pudo encontrar solución ya que no tengo más nodos para expandir');
        } else {
            this.lineaLog(t, 'Se encontró el camino: ' + solucion.getStrCamino());
            this.lineaLog(t, 'Longitud: ' + solucion.g);
            this.solucion = solucion;
        }
        this.armarArbol(t);
        $('#explicacion').html(this.parseLog());
    }

    /**
     * Funcion que arma el arbol dependiendo del t provisto
     */

    armarArbol(t) {
        this.inicioArbol.marcarColor(t, t == this.t);
        dataArbol = {
            nodes: this.inicioArbol.getNodosArbol(t),
            edges: this.inicioArbol.getCaminosArbol(t)
        };

        var networkArbol = new vis.Network(containerArbol, dataArbol, optionsArbol);
        networkArbol.on('resize', function(params) {
            setTimeout(function () {
                networkArbol.fit();
            },100);
        });
    }


    lineaLog(t, txt) {
        if(!Array.isArray(this.log[t])) {
            this.log[t] = [];
        }
        this.log[t].push(txt);
    }

    /**
     * Devuelve un HTML con el log
     */

    parseLog() {
        let str = '';
        this.log.forEach(function (e,i) {
            str+='<div id="log-'+i+'" class="card m-2 card-log" style="cursor: pointer" onclick="mostrarPasoLog('+i+')">';
            str+= "<div class='card-header'>t = " + i + "</div>\n";
            str+= '<div class="card-body">';
            e.forEach(function (e) {
                str+= "<p class='card-text'>" + e + "</p>\n";
            });
            str+='</div></div>';
        });
        str+='<div id="log-estadisticas" class="card m-2 card-log">';
        str+= "<div class='card-header'>Estadísticas</div>\n";
        str+= '<div class="card-body">';
        str+= '<p>t: ' + this.t + '</p>';
        str+= '<p>Abiertos: ' + this.abiertos.length + '</p>';
        str+= '<p>Cerrados: ' + this.cerrados.length + '</p>';
        str+='</div></div>';

        return str;
    }
}