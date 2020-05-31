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
        this.lineaLog(t, 'A continuación se empezarán a expandir los nodos en orden alfabético');
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

                if(minimo == null) {
                    //Si no tengo un minimo, guardo este nodo
                    minimo = e;
                } else if(e.f < minimo.f) {
                    //Si es mejor que el mejor que tengo hasta ahora, lo guardo
                    minimo = e;
                } else if(e.f == minimo.f) {
                    //Si tienen igual f, primero priorizo al que no es solucion
                    //ya que por el que no es solucion puedo llegar a tener un mejor camino
                    debugger;
                    if(minimo.nodo.fin && !e.nodo.fin) {
                        minimo = e;
                    } else if(!minimo.nodo.fin && !e.nodo.fin) {
                        //Si ninguno de los dos es solucion, dejo como minimo al que tenga la menor letra
                        if(e.nodo.id < minimo.nodo.id) {
                            minimo = e;
                        }
                    }
                }
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
                                a.cerrar(t, false);
                                this.cerrados.push(a);
                                return false;
                            } else if(a.f < n.f) {
                                this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f);
                                n.cerrar(t, false);
                                this.cerrados.push(n);
                                mantenerNuevo = false;
                            } else {
                                //Si son iguales desempato por cantidad de nodos expandidos
                                //el nodo que esté mas profundo es el que potencialmente tiene menos
                                //nodos que se deberán reexpandir

                                if(n.id.length <= a.id.length) {
                                    //No necesito calcular la profundidad ni guardarla en otra variable, el id
                                    //de cada NodoArbol es una concatenacion del id de su NodoGrafo más el de sus ancestros
                                    //En caso de empate se prioriza el nodo anterior
                                    this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f
                                        + ' (desempate por mayor profundidad en el arbol y mayor antiguedad del nodo)');
                                    n.cerrar(t, false);
                                    this.cerrados.push(n);
                                    mantenerNuevo = false;
                                } else {
                                    this.lineaLog(t, 'Cierro el nodo ' + a.nodo.id + ' con f\' = ' + a.f
                                        + ' (desempate por mayor profundidad en el arbol y mayor antiguedad del nodo)');
                                    a.cerrar(t, false);
                                    this.cerrados.push(a);
                                    return false;
                                }
                            }
                        }
                        return true;
                    }, this);

                    if(mantenerNuevo) {
                        //Ahora busco entre mis cerrados si existe alguna rama que pueda cerrar
                        this.cerrados.forEach(function (c) {
                            //No quiero analizar los que recien cerre, eso me va a traer problemas
                            if(c.tCerrado == t) return;
                            
                            if(c.nodo.id == n.nodo.id) {
                                if(c.f > n.f) {
                                    //Si encuentro un nodo anterior, cierro sus hijos
                                    let nodosRamaCerrada = c.cerrar(t, true);
                                    if (nodosRamaCerrada.length > 0) {
                                        //Si cerre hijos, entonces los muestro en el log y los quito de abiertos
                                        let strCierre = 'Se cierran los siguientes nodos que corresponden a una rama que ya no es la mejor: ';
                                        nodosRamaCerrada.forEach(function (rc) {
                                            this.abiertos.splice(this.abiertos.indexOf(rc), 1);
                                            strCierre += rc.nodo.id + '(' + rc.f + '), ';
                                        }, this);
                                        this.lineaLog(t, strCierre.slice(0, -2));
                                    }
                                } else if(c.f < n.f) {
                                    mantenerNuevo = false;
                                    this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f)
                                    n.cerrar(t, false);
                                    this.cerrados.push(n);
                                } else {
                                    mantenerNuevo = false;
                                    this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f
                                        + '(se prioriza al nodo anterior porque ya fue expandido)');
                                    n.cerrar(t, false);
                                    this.cerrados.push(n);
                                }
                            }
                        }, this);
                    }
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