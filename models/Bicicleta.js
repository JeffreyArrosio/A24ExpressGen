
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

Bicicleta.removeById = function (id) {
    let index = this.allBicis.findIndex(e => e.id == id)
    this.allBicis.splice(index, 1)
}

Bicicleta.put = function (id, color, modelo, latitud, longitud) {
    console.log(id, color, modelo, latitud, longitud);
    let index = this.allBicis.findIndex(e => e.id == id)
    let bici = this.allBicis[index]
    if(modelo)bici.modelo = modelo
    if(color)bici.color = color
    if(latitud & longitud){
        let ubicacion = [req.body.latitud, req.body.longitud]
        bici.ubicacion = ubicacion
    }
}

module.exports = Bicicleta;