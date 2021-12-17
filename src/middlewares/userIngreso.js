const fs = require('fs')
const path = require('path')
let usuarios = ['Ada','Greta','Vim','Tim']

function ingresoMiddleware(req,res,next) {
        for (let i = 0; i < usuarios.length; i++) {
            if (req.query.user === usuarios[i]) {
                
                next()
            }else{
                res.send('No tienes los privilegios para ingresar')
            }
            
        }
   

}

module.exports = ingresoMiddleware