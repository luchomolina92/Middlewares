module.exports = {
    login : (req,res) => {
        return res.render('index')
        
    },
    admin : (req,res,next) => {
      return res.send('Hola Admin ' + req.query.user);
        
    }
   
}