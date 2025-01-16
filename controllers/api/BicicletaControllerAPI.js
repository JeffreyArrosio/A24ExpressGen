let Bicicleta = require("../../models/Bicicleta");

exports.bicicleta_list = function(req, res) {
    res.status(200).json ({
        bicicletas: Bicicleta.allBicis
    });    
};

exports.bicicleta_create = function(req,res){
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    })
}

exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};

exports.bicicleta_update = function(req,res){
    let id, color, modelo, latitud, longitud

    id = req.params.id

    req.body.color ? color = req.body.color : color = null
    req.body.modelo ? modelo = req.body.modelo : modelo = null
    req.body.latitud ? latitud = req.body.latitud : latitud = null
    req.body.longitud ? longitud = req.body.longitud : longitud = null

    let bici = new Bicicleta(id,color,modelo)
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.put(id,color,modelo,latitud,longitud)
    res.status(201).json({
        bicicleta: bici
    })
}