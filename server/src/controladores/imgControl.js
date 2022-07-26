const glob = require('glob');
 
exports.conectar = (req, res) => {
    let {nombre} = req.params
    glob(`./../../../client/src/source/*${nombre}*.mp3`, (err, files) => {
    //glob(`http://localhost/source/*${nombre}*.mp3`, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        res.json({msg:"Tenemos resultados", rows: files})
        console.log(files);
    }
});
} 

exports.create = (req, res) => {
    req.getConnection((err, con) => {
        if(err) res.send(500)

        datos = {
            nombre: req.body.nombre,
            ruta: req.body.ruta,
            image: req.file.filename,
            //image2: req.file.filename
        }

        console.log(datos)

        con.query("INSERT INTO " + req.params.tabla + " SET ?", [datos], (err, results) => {
            console.log(err ? "Error INSERT INTO " + req.params.tabla + " SET ?" + err : "Se insertó")
            res.json(err ? {err: "Algo pasó, y no sabemos qué es." } : {msg: "Datos guardados"})
        })
    })
}

exports.search = (req, res) => {
    req.getConnection((err, con) => {
        con.query("SELECT * FROM " + req.params.tabla, (err, results) => {
            console.log(
                err
                ? "Error al consultar."
                : "Consulta exitosa: " + results.length
            )
            res.json(
                err ? {err: "Error al consultar "} : {msg: results.length, rows: results}
            )
        })
    })
}