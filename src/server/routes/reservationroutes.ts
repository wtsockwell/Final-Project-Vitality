import * as express from 'express'
import db from '../db'

const router = express.Router()

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