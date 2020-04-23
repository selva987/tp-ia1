
/**
 * Ya que el dataset de vis no respeta las clases de los objetos
 * extendemos el dataset para que tome y devuelva la clase que le mandamos
 */
class MiDataSet extends vis.DataSet {

    constructor(callbackCreacion) {
        super();
        this.callbackCreacion = callbackCreacion;
    }

    get(param) {
        let retorno = super.get(param);
        if(retorno == null) return null;
        if(Array.isArray(retorno)) {
            return retorno.map(function(e) {
                return this.callbackCreacion(e);
            },this);
        } else return this.callbackCreacion(retorno);
    }
}