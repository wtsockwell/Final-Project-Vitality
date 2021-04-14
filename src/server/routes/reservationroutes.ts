import * as express from 'express'
import db from '../db'
import { ReqUser } from './userroutes';

const router = express.Router()

export const isPrem = (req: ReqUser, res, next) => {
    if (req.user) {
        try {
            let [user] = req.user
            if (user.ispremmember == 0) {
                return res.sendStatus(401)
            } else {
                return next()
            }
        } catch (error) {
            res.send(error)
        }
    } else if (!req.user) {
        console.log("next")
        res.sendStatus(401)
    }
};


router.get('/:id', async(req,res) =>{
    try {
        let id = req.params.id
        res.json(await db.reservations.get(id))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
router.post('/', async (req, res) => {
    let reservationinfo = req.body
    try {
        const resinfo = await db.reservations.post(reservationinfo.userid, reservationinfo.eventid)
        res.json(resinfo)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        res.json(await db.reservations.remove(req.body.userid, req.body.eventid))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router