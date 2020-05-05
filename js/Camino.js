/**
 * Camino de arbol o grafo
 */
class Camino extends ElementoGrafico {
    constructor(id, peso, from, to) {
        super(id, peso.toString());
        this.from = from;
        this.to = to;
    }
}