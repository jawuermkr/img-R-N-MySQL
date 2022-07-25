exports.create = (req, res) => {
    req.getConnection((err, con) => {
        if(err) res.send(500)
        con.query("INSERT INTO " + req.params.tabla + " SET ?", [req.body], (err, results) => {
            console.log(err ? "Error INSERT INTO " + req.params.tabla + " SET ?" + err : "Se insertó")
            res.json(err ? {err: "Algo pasó, y no sabemos qué es." } : {msg: "Datos guardados"})
        })
    })
}