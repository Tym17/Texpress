import { Response, Request, Router } from "express";

const router: Router = Router();

/* GET users listing. */
router.get('/', getUsersListing);
export function getUsersListing(req: Request, res: Response) {
  res.send('respond with a resource');
}

export default router;
