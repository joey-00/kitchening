module.exports = {
    register : (req,res) => {
        return res.render('users/register',{
           title : "registro de usuario" 
        })
    },
    login : (req,res) => {
        return res.render('users/login',{
           title : "inicio de sesion" 
        })
    },
    profile : (req,res) => {
        return res.render('users/profile',{
           title : "perfil de usuario" 
        })
    },
    
}