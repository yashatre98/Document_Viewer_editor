const express = require('express')
const router = express.Router()
const ArticlesMysql = require('../models/ArticlesMysql')

router.get('/', (req,res)=>{
    res.render('create');
})
router.post('/', async(req,res)=>{
    console.log("hello")
    console.log(req.body)
     await ArticlesMysql.addDocument(req.body.title, req.body.content)
     res.status(201).json("created");
})

module.exports = router
