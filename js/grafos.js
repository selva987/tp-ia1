/**
 * Colección de grafos de ejemplo
 */

var ejemploSimple = {
    "nodes": [{
        "id": "A",
        "h": 50,
        "label": "A: 50",
        "x": -72.5,
        "y": -79.83332824707031,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "h": 0,
        "label": "B: 0",
        "x": 57.5,
        "y": -10.833328247070312,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }], "edges": [{"from": "A", "to": "B", "label": "40", "peso": 40, "id": "AB"}]
};

var grafoHOptimo = {
    "nodes": [{
        "id": "A",
        "h": 30,
        "label": "A: 3",
        "x": 16.5,
        "y": -244.8333282470703,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "h": 20,
        "label": "B: 2",
        "x": -131.5,
        "y": -177.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "C",
        "h": 20,
        "label": "C: 2",
        "x": 9.5,
        "y": -170.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "D",
        "h": 10,
        "label": "D: 1",
        "x": 146.5,
        "y": -164.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "E",
        "h": 10,
        "label": "E: 1",
        "x": -78.5,
        "y": -49.83332824707031,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "F",
        "h": 0,
        "label": "F: 0",
        "x": 30.5,
        "y": 101.16667175292969,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }],
    "edges": [{"from": "A", "to": "B", "label": "10", "peso": 10, "id": "AB"}, {
        "from": "A",
        "to": "C",
        "label": "10",
        "peso": 10,
        "id": "AC"
    }, {"from": "A", "to": "D", "label": "10", "peso": 10, "id": "AD"}, {
        "from": "B",
        "to": "E",
        "label": "10",
        "peso": 10,
        "id": "BE"
    }, {"from": "C", "to": "E", "label": "10", "peso": 10, "id": "CE"}, {
        "from": "E",
        "to": "F",
        "label": "10",
        "peso": 10,
        "id": "EF"
    }, {"from": "F", "to": "D", "label": "10", "peso": 10, "id": "DF"}]
}

var grafoHSobreestimado = {
    "nodes": [{
        "id": "A",
        "h": 40,
        "label": "A: 3",
        "x": 16.5,
        "y": -244.8333282470703,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "h": 25,
        "label": "B: 2",
        "x": -131.5,
        "y": -177.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "C",
        "h": 29,
        "label": "C: 2",
        "x": 9.5,
        "y": -170.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "D",
        "h": 30,
        "label": "D: 1",
        "x": 146.5,
        "y": -164.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "E",
        "h": 13,
        "label": "E: 1",
        "x": -78.5,
        "y": -49.83332824707031,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "F",
        "h": 0,
        "label": "F: 0",
        "x": 30.5,
        "y": 101.16667175292969,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }],
    "edges": [{"from": "A", "to": "B", "label": "10", "peso": 10, "id": "AB"}, {
        "from": "A",
        "to": "C",
        "label": "10",
        "peso": 10,
        "id": "AC"
    }, {"from": "A", "to": "D", "label": "10", "peso": 10, "id": "AD"}, {
        "from": "B",
        "to": "E",
        "label": "10",
        "peso": 10,
        "id": "BE"
    }, {"from": "C", "to": "E", "label": "10", "peso": 10, "id": "CE"}, {
        "from": "E",
        "to": "F",
        "label": "10",
        "peso": 10,
        "id": "EF"
    }, {"from": "F", "to": "D", "label": "10", "peso": 10, "id": "DF"}]
}

var grafoHSubestimado = {
    "nodes": [{
        "id": "A",
        "h": 20,
        "label": "A: 3",
        "x": 16.5,
        "y": -244.8333282470703,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "h": 15,
        "label": "B: 2",
        "x": -131.5,
        "y": -177.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "C",
        "h": 17,
        "label": "C: 2",
        "x": 9.5,
        "y": -170.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "D",
        "h": 19,
        "label": "D: 1",
        "x": 146.5,
        "y": -164.8333282470703,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "E",
        "h": 18,
        "label": "E: 1",
        "x": -78.5,
        "y": -49.83332824707031,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "F",
        "h": 0,
        "label": "F: 0",
        "x": 30.5,
        "y": 101.16667175292969,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }],
    "edges": [{"from": "A", "to": "B", "label": "1", "peso": 10, "id": "AB"}, {
        "from": "A",
        "to": "C",
        "label": "10",
        "peso": 10,
        "id": "AC"
    }, {"from": "A", "to": "D", "label": "10", "peso": 10, "id": "AD"}, {
        "from": "B",
        "to": "E",
        "label": "10",
        "peso": 10,
        "id": "BE"
    }, {"from": "C", "to": "E", "label": "10", "peso": 10, "id": "CE"}, {
        "from": "E",
        "to": "F",
        "label": "10",
        "peso": 10,
        "id": "EF"
    }, {"from": "F", "to": "D", "label": "10", "peso": 10, "id": "DF"}]
}

var grafoPractica = {
    "nodes": [{
        "id": "D",
        "h": 40,
        "label": "D: 40",
        "x": -30.166671752929688,
        "y": -233,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "E",
        "h": 43,
        "label": "E: 43",
        "x": -84.16667175292969,
        "y": -134,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "I",
        "h": 20,
        "label": "I: 20",
        "x": 84.16277824370779,
        "y": -261.76618799381293,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "J",
        "h": 18,
        "label": "J: 18",
        "x": 85.64936724364054,
        "y": -133.9195339995965,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "K",
        "h": 21,
        "label": "K: 21",
        "x": -35.56501641524422,
        "y": -73.23894590693988,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "L",
        "h": 10,
        "label": "L: 10",
        "x": 235.7948562368482,
        "y": -206.7623949963012,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "M",
        "h": 30,
        "label": "M: 30",
        "x": 225.05138170411598,
        "y": -286.826821057393,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "P",
        "h": 5,
        "label": "P: 5",
        "x": 281.8791152347634,
        "y": -117.56705500033625,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "Q",
        "h": 0,
        "label": "Q: 0",
        "x": 201.53712021966243,
        "y": -51.68420621285745,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }],
    "edges": [{"from": "D", "to": "I", "label": "44", "peso": 44, "id": "DI"}, {
        "from": "D",
        "to": "E",
        "label": "10",
        "peso": 10,
        "id": "DE"
    }, {"from": "D", "to": "K", "label": "48", "peso": 48, "id": "DK"}, {
        "from": "E",
        "to": "J",
        "label": "59",
        "peso": 59,
        "id": "EJ"
    }, {"from": "K", "to": "J", "label": "50", "peso": 50, "id": "JK"}, {
        "from": "J",
        "to": "L",
        "label": "23",
        "peso": 23,
        "id": "JL"
    }, {"from": "J", "to": "Q", "label": "7", "peso": 7, "id": "JQ"}, {
        "from": "I",
        "to": "M",
        "label": "90",
        "peso": 90,
        "id": "IM"
    }, {"from": "I", "to": "L", "label": "16", "peso": 16, "id": "IL"}, {
        "from": "M",
        "to": "L",
        "label": "70",
        "peso": 70,
        "id": "LM"
    }, {"from": "L", "to": "P", "label": "2", "peso": 2, "id": "LP"}, {
        "from": "P",
        "to": "Q",
        "label": "30",
        "peso": 30,
        "id": "PQ"
    }]
}

var sinSolucion = {
    "nodes": [{
        "id": "A",
        "label": "A: 311",
        "h": 311,
        "x": -126.66667175292969,
        "y": -164.5,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "label": "B: 0",
        "h": 0,
        "x": 74.33332824707031,
        "y": 73.5,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }, {
        "id": "C",
        "label": "C: 196",
        "h": 196,
        "x": -88.66667175292969,
        "y": -36.5,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "D",
        "label": "D: 170",
        "h": 170,
        "x": 17.333328247070312,
        "y": -87.5,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }],
    "edges": [{"from": "A", "to": "D", "label": "163", "peso": 163, "id": "AD"}, {
        "from": "A",
        "to": "C",
        "label": "133",
        "peso": 133,
        "id": "AC"
    }]
};

var ejemplo1 = {
    "nodes": [{
        "id": "A",
        "label": "A: 314",
        "h": 314,
        "x": -140.6666717529297,
        "y": -81.16667175292969,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "B",
        "label": "B: 302",
        "h": 302,
        "x": -85.66667175292969,
        "y": -152.1666717529297,
        "inicio": true,
        "color": {
            "border": "#f5c6cb",
            "background": "#f8d7da",
            "highlight": {"border": "#dc3545", "background": "#dc3545"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "C",
        "label": "C: 267",
        "h": 267,
        "x": -114.66667175292969,
        "y": 29.833328247070312,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "D",
        "label": "D: 215",
        "h": 215,
        "x": -51.66667175292969,
        "y": -34.16667175292969,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "E",
        "label": "E: 193",
        "h": 193,
        "x": 17.333328247070312,
        "y": -105.16667175292969,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "F",
        "label": "F: 207",
        "h": 207,
        "x": 84.33332824707031,
        "y": -162.1666717529297,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "G",
        "label": "G: 69",
        "h": 69,
        "x": 134.3333282470703,
        "y": -33.16667175292969,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "H",
        "label": "H: 119",
        "h": 119,
        "x": 38.33332824707031,
        "y": 70.83332824707031,
        "inicio": false,
        "color": {
            "border": "#2B7CE9",
            "background": "#97C2FC",
            "highlight": {"border": "#2B7CE9", "background": "#D2E5FF"}
        },
        "fin": false,
        "vecinos": null
    }, {
        "id": "I",
        "label": "I: 0",
        "h": 0,
        "x": 152.3333282470703,
        "y": 33.83332824707031,
        "inicio": false,
        "color": {
            "border": "#c3e6cb",
            "background": "#d4edda",
            "highlight": {"border": "#28a745", "background": "#28a745"}
        },
        "fin": true,
        "vecinos": null
    }],
    "edges": [{"from": "F", "to": "B", "label": "170", "peso": 170, "id": "BF"}, {
        "from": "F",
        "to": "E",
        "label": "87",
        "peso": 87,
        "id": "EF"
    }, {"from": "E", "to": "B", "label": "113", "peso": 113, "id": "BE"}, {
        "from": "E",
        "to": "G",
        "label": "137",
        "peso": 137,
        "id": "EG"
    }, {"from": "F", "to": "G", "label": "138", "peso": 138, "id": "FG"}, {
        "from": "A",
        "to": "B",
        "label": "89",
        "peso": 89,
        "id": "AB"
    }, {"from": "A", "to": "E", "label": "159", "peso": 159, "id": "AE"}, {
        "from": "D",
        "to": "E",
        "label": "99",
        "peso": 99,
        "id": "DE"
    }, {"from": "E", "to": "H", "label": "177", "peso": 177, "id": "EH"}, {
        "from": "D",
        "to": "I",
        "label": "215",
        "peso": 215,
        "id": "DI"
    }, {"from": "H", "to": "C", "label": "158", "peso": 158, "id": "CH"}, {
        "from": "C",
        "to": "A",
        "label": "114",
        "peso": 114,
        "id": "AC"
    }, {"from": "C", "to": "I", "label": "267", "peso": 267, "id": "CI"}, {
        "from": "G",
        "to": "D",
        "label": "186",
        "peso": 186,
        "id": "DG"
    }, {"from": "C", "to": "D", "label": "89", "peso": 89, "id": "CD"}, {
        "from": "H",
        "to": "I",
        "label": "119",
        "peso": 119,
        "id": "HI"
    }]
}
