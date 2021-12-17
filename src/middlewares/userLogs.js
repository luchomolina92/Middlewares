const fs = require('fs')
const path = require('path')


function logMiddleware(req,res,next) {
    fs.appendFileSync(path.join('./logs/userLogs.txt'),'Se ingreso la persona ' + req.url);
    next()

}

module.exports = logMiddleware