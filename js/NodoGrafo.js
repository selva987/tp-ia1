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
    }

    setH(h) {
        this.h = h;
        this.label = this.id + ': ' + (this.h != null ? this.h : '???');
    }

    setInicio(valor) {
        this.inicio = valor;
        if(valor) {
            if(this.fin) {
                this.color = colorDoble;
            } else {
                this.color = colorInicio;
            }
        } else {
            if(this.fin) {
                this.color = colorFin;
            } else {
                this.color = colorComun;
            }
        }
    }


    setFin(valor) {
        this.fin = valor;
        if(valor) {
            this.setH(0);
            if(this.inicio) {
                this.color = colorDoble;
            } else {
                this.color = colorFin;
            }
        } else {
            if(this.inicio) {
                this.color = colorInicio;
            } else {
                this.color = colorComun;
            }

        }
    }
}

var colorComun = {
    border: '#2B7CE9',
    background: '#97C2FC',
    highlight: {
        border: '#2B7CE9',
        background: '#D2E5FF'
    }
};

var colorInicio = {
    border: '#f5c6cb',
    background: '#f8d7da',
    highlight: {
        border: '#dc3545',
        background: '#dc3545'
    }
};

var colorFin = {
    border: '#c3e6cb',
    background: '#d4edda',
    highlight: {
        border: '#28a745',
        background: '#28a745'
    }
};

var colorDoble = {
    border: '#ffeeba',
    background: '#ffeeba',
    highlight: {
        border: '#ffc107',
        background: '#ffc107'
    }
};