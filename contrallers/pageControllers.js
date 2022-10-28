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

