const express=require("express");
const router=express.Router();
const controller=require('../controller/feed.js');
router.get('/get',controller.getPosts);
router.post('/post',controller.createPosts);
module.exports=router;