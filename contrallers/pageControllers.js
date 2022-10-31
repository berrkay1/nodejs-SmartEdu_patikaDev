exports.IndexPage = (req,res)=>{
    res.status(200).render('index',{
        pageName:"index"
    })
}


exports.AboutPage = (req,res)=>{
    res.status(200).render('about',{
        pageName:"about"
    })
}


exports.RegisterPage = (req,res)=>{
    res.status(200).render('register',{
        pageName:"register"
    })
}

exports.LoginPage = (req,res)=>{
    res.status(200).render('login',{
        pageName:"login"
    })
}