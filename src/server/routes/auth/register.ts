import * as express from "express";
import DB from "../../db";

import { Hashpassword } from "../../../utils/security/password";
import { CreateToken } from "../../../utils/security/token";

const router = express.Router();

router.post("/", async (req, res, next) => {
    let user:Body = req.body;
    try {
        let premstatus = 0
        user.password = Hashpassword(req.body.password);
        if (user.ispremmember == 0) {
            premstatus = 1
        } else { premstatus = 0 }
        let result:Result = await DB.users.post(
            user.email,
            user.username,
            user.password,
            premstatus
        );
        
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            userid: result.insertId,
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

interface Body {
    password: string,
    ispremmember: number,
    email: string,
    username: string,
}

interface Result{
    insertId:number

}




export default router;