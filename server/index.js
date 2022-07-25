const express = require("express")
const expressmyconecction = require("express-myconnection")
const cors = require("cors")
const mysql = require("mysql2")

const app = express()

app.set("port", process.env.PORT || 3001)
const dbconfig = {
    host:"localhost",
    user: "root",
    password: "Asiste.2021",
    database: "imgreact",
}

//MIDDLEWARES

//
app.use(expressmyconecction(mysql, dbconfig, "single"))
// Evitar problemas entre cliente y servidor
app.use(cors())
// Permite ingreso de datos en formato json desde cliente
app.use(express.json())


app.use("/api", require("./src/rutas/imgRuta"))

app.listen(app.get("port"), () => {
    console.log("Corriendo en el puerto " + app.get("port"))
})
