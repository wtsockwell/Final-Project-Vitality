import * as express from "express";
import * as passport from "passport";

import { CreateToken } from "../../../utils/security/token";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("local"),
  async (req: any, res, next) => {
    try {
      let token = await CreateToken({ userid: req.user.id });
      res.json({
        token,
        ispremmember: req.user.ispremmember,
        userid: req.user.id,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
);

export default router;