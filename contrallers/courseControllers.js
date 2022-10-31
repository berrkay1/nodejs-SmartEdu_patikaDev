const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req,res) => {

    const course = await Course.create(req.body);

    try{
        res.status(201).json({
            status:'success',
            course
        })
    } catch {
        res.status(400).json({
            status:'fail',
            error
        })
    }


}


exports.getAllCourses = async (req,res) => {

    try{

        const categorySlug =  req.query.categories;
        const category = await Category.findOne({slug:categorySlug})
        
        let filter = {};
        if(categorySlug){
            filter = {category:category._id}
        }


        const courses = await Course.find(filter);
        const categories = await Category.find();

        res.status(200).render('courses',{
            courses,
            categories,
            pageName:"courses"
            
        })
    } catch {
        res.status(400).json({
            status:'fail',
            error
        })
    }


}

exports.getCourse = async (req,res) => {

    const course = await Course.findOne({slug:req.params.slug});
console.log(course);
    try{
        res.status(200).render('course-single',{
            course,
            pageName:"courses"
        })
    } catch {
        res.status(400).json({
            status:'fail',
            error
        })
    }


}