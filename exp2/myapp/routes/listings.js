const express = require('express')
const router = express.Router()
const ArticlesMysql = require('../models/ArticlesMysql')


// list all Articles
router.get('/', async (req, res) => {
    const offset = Number(req.query.offset ?? 0)
    const limit = Number(req.query.limit ?? 100)
    // we can send objects or arrays and Express will automatically convert them to JSON strings
    const courses = await ArticlesMysql.getDocuments(offset, limit)
    res.render('listing', {articles:courses});
})
//list specific Article
router.get('/listing/:id', async (req, res) => {
    const course = await ArticlesMysql.getDocument(req.params.id)
    console.log(course)
    res.render('edit', {listing:course[0]});
})
//Update an existing article
router.post('/listing/:id', async(req,res)=>{
    console.log("hello", req.params)
    console.log(req.body)
     await ArticlesMysql.updateDocument(req.params.id, req.body.title, req.body.content)
     res.status(201).json("updated");
})
//delete an article
router.delete('/listing/:id',async(req,res)=>{
    await ArticlesMysql.deleteDocument(req.params.id)
    res.status(200).json("deleted");
    //res.redirect('../views/listings.ejs')
})


module.exports = router

