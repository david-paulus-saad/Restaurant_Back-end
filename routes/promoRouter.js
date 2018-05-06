const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.statusCode = 200;

    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.statusCode = 200;

    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT  operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.statusCode = 200;

    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res ,next)=>{
    res.statusCode=200;
    res.end('Will send the promotion with id : '+req.params.promoId +' to you!');

})
.post((req,res,next)=> {
    res.statusCode= 403;
    res.end('POST operation not supported on /promotions/promoId')
})
.put((req,res,next)=>{
    res.statusCode=200;
    res.end('Will update the promotion id : '+req.params.promoId +" with promotion title : "+ req.body.title +" and details : "+req.body.description);
})
.delete((req,res,next)=>{
    res.statusCode=200;
    res.end('Will delete the promotion with id : '+req.params.promoId +" with promotion title : "+ req.body.title +" and details : "+req.body.description);
});

module.exports = promoRouter;