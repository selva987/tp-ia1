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
        "h": 3,
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
        "h": 2,
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
        "h": 2,
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
        "h": 1,
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
        "h": 1,
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
    "edges": [{"from": "A", "to": "B", "label": "1", "peso": 1, "id": "AB"}, {
        "from": "A",
        "to": "C",
        "label": "1",
        "peso": 1,
        "id": "AC"
    }, {"from": "A", "to": "D", "label": "1", "peso": 1, "id": "AD"}, {
        "from": "B",
        "to": "E",
        "label": "1",
        "peso": 1,
        "id": "BE"
    }, {"from": "C", "to": "E", "label": "1", "peso": 1, "id": "CE"}, {
        "from": "E",
        "to": "F",
        "label": "1",
        "peso": 1,
        "id": "EF"
    }, {"from": "F", "to": "D", "label": "1", "peso": 1, "id": "DF"}]
}