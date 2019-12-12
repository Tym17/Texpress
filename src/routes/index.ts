import express, { Response, Request } from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  res.render('index', { title: 'Express', badtitle: process.env.BAD_NAME });
});

module.exports = router;
