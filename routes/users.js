const express = require('express');
const models = require("../models");
const router = express.Router();

// 게시글 확인 및 작성
router.get('/board', function (req, res, next) {
    models.post.findAll().then( result => {
        res.render('board/board', {
            posts: result
        });
    });
});

router.post('/board', function (req, res, next) {
    let body = req.body;

    models.post.create({
        title: body.inputTitle,
        writer : body.inputWriter
    })
        .then( result => {
            console.log("게시글 추가 완료.");
            res.redirect("/users/board");
        })
        .catch( err => {
            console.log(body.inputTitle);
            console.log(body.inputWriter);
            console.log("게시글 추가 실패.");
        })
})

module.exports = router;
