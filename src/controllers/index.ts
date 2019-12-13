import { Response, Request, Router } from "express";

const router: Router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  res.render('index', { title: 'Express', badtitle: process.env.BAD_NAME });
});

export default router;
