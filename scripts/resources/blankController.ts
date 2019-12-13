import { Response, Request, Router } from "express";

const router: Router = Router();

/*
** Create a function and export it for easier testing of this controller
** Example: 
**    router.get('/', getHomepage);
**    export function getHomepage(req: Request, res: Response) {
**        res.render('index', { title: 'Express', badtitle: process.env.BAD_NAME });
**    }
*/

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  res.render('index', { title: 'Express' });
});

export default router;
