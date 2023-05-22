const Universidad = require('../models/universidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''

        const direccion = req.body.direccion
        const telefono = req.body.telefono

        const universidadDB = await Universidad.findOne({nombre})
        
        if(universidadDB){
           return res.status(400).json({msg: 'Ya existe'})
        }

        const data = {
            nombre,  // nombre: nombre
            direccion,
            telefono
        }
        const universidad = new universidad(data)
        //console.log(universidad)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getUniversidades = async (req = request, 
    res = response) => {
        try{
            const universidadDB = await Universidad.find()//select * from Universidad where estado=?
            return res.json(universidadDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


const updateUniversidadByID = async (req = request,
    res = response) => {
    try{
        //console.log(req.body)
       // console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        //console.log(data)
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.json(universidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createUniversidad, 
    getUniversidades,
    updateUniversidadByID
}