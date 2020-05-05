
/**
 * Ya que el dataset de vis no respeta las clases de los objetos
 * extendemos el dataset para que tome y devuelva la clase que le mandamos
 */
class MiDataSet extends vis.DataSet {

    constructor(data,callbackCreacion) {
        super(data);
        this.callbackCreacion = callbackCreacion;
    }

    /**
     * Devuelve objetos que se pidan dependiendo del parametro y del callback
     * @param param
     * @returns [Object]
     */
    get(param) {
        let retorno = super.get(param);
        if(retorno == null) return null;
        if(Array.isArray(retorno)) {
            return retorno.map(function(e) {
                //Callback es una funcion que permite instanciar los elementos de la coleccion
                //que se estén obteniendo, de esta manera la clase sigue siendo agnóstica con respecto
                //a lo que colecciona, pero permite respetar el tipo de objetos que se colecciona
                return this.callbackCreacion(e);
            },this);
        } else return this.callbackCreacion(retorno);
    }
}