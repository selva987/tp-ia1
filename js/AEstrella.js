class AEstrella {
    constructor(nodos) {
        this.nodos = nodos;
        this.log = [];
        //cargo inicio y fin
        nodos.forEach(function(e) {
            if(e.inicio) this.inicio = e;
            if(e.fin) this.fin = e;
            e.vecinos = null;
        }, this);
    }

    resolver() {
        let t = 0;
        //creo el nodo inicial del arbol
        this.inicioArbol = new NodoArbol(this.inicio, 0, null, t);
        this.lineaLog(t, 'Agrego el nodo inicial');
        this.lineaLog(t, this.inicioArbol.getStrF());
        let abiertos = [this.inicioArbol];
        let solucion = null;
        let minimo;
        let nuevosNodos;
        while(true) {
            t++;
            //Si no tengo mas nodos abiertos, termino y me quedo con la solucion que tenga, si es que hay
            if(abiertos.length == 0) {
                break;
            }
            //selecciono el nodo a expandir, o sea, el minimo f
            minimo = null;
            abiertos.forEach(function (e) {
                //Si el nodo es objetivo, comparo con mi solucion anterior,
                // si es mejor lo guardo
                if(e.nodo.fin) {
                    if(solucion == null || e.f < solucion.f) solucion = e;
                }

                if(minimo == null || e.f < minimo.f) minimo = e;
            }, this);


            //Si el nodo seleccionado es minimo y es la solucion, terminé, sino sigo
            if(minimo.nodo.fin && minimo == solucion) {
                this.lineaLog(t, 'El nodo ' + minimo.nodo.id + ' con f\' = ' + minimo.f + ' es el nodo final y el mejor de los abiertos, por lo tanto es la solucion');
                break;
            } else {
                this.lineaLog(t, 'El nodo ' + minimo.nodo.id + ' con f\' = ' + minimo.f + ' es el minimo, así que lo expando');
                //el nodo que esta en minimo es el que voy a expandir, asi que lo quito de mis abiertos
                abiertos.splice(abiertos.indexOf(minimo),1);

                //expando y tengo los nuevos nodos
                nuevosNodos = minimo.expandir(t);
                minimo.cerrar(t, false);
                nuevosNodos.forEach(function (e) {this.lineaLog(t,e.getStrF())}, this);

                //ahora que tengo nuevos nodos me fijo si puedo cerrar algunos
                nuevosNodos = nuevosNodos.filter(function(n) {
                    //filter es una funcion que recorre el array, y devuelve los elementos
                    //de las iteraciones en las que devuelvo true
                    let mantenerNuevo = true;
                    abiertos = abiertos.filter(function (a) {
                        //Si son del mismo nodo, comparo y cierro el que corresponda
                        if(n.nodo.id == a.nodo.id) {
                            //si un nodo abierto coincide con un nuevo, lo comparo y dejo
                            //el mejor, si son iguales dejo ambos
                            if(a.f > n.f) {
                                this.lineaLog(t, 'Cierro el nodo ' + a.nodo.id + ' con f\' = ' + a.f)
                                a.cerrar(t, true);
                                return false;
                            } else if(a.f != n.f) {
                                this.lineaLog(t, 'Cierro el nuevo nodo ' + n.nodo.id + ' con f\' = ' + n.f)
                                n.cerrar(t, true);
                                mantenerNuevo = false;
                            }
                        }
                        return true;
                    }, this);
                    return mantenerNuevo;
                }, this);

                //finalmente guardo los nodos nuevos que me quedaron
                nuevosNodos.forEach(function(e){abiertos.push(e);});
            }
        }
        this.t = t;
        if(solucion == null) {
            this.lineaLog(t, 'No se pudo encontrar solución');
        } else {
            this.lineaLog(t, 'Se encontró el camino: ' + solucion.getStrCamino());
            this.solucion = solucion;
            this.armarArbol(t);
            $('#explicacion').html(this.parseLog());
        }
    }
    armarArbol(t) {
        this.inicioArbol.marcarColor(t, t == this.t);
        dataArbol = {
            nodes: this.inicioArbol.getNodosArbol(t),
            edges: this.inicioArbol.getCaminosArbol(t)
        };

        var networkArbol = new vis.Network(containerArbol, dataArbol, optionsArbol);
        networkArbol.on('resize', function(params) {
            networkArbol.fit();
        });
    }
    lineaLog(t, txt) {
        if(!Array.isArray(this.log[t])) {
            this.log[t] = [];
        }
        this.log[t].push(txt);
    }

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

        return str;
    }
}