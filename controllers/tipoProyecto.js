const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoProyectoDB = await TipoProyecto.findOne({nombre})//select * from tipoProyecto where nombre=?
        
        if(tipoProyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getTipoProyectos = async (req = request, 
    res = response) => {
        try{
            const tipoProyectosDB = await TipoProyecto.find()//select * from tipoProyecto where estado=?
            return res.json(tipoProyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
/*const updateTipoEquipoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}*/

module.exports = { 
    createTipoProyecto, 
    getTipoProyectos
}