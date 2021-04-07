import * as express from 'express'
import db from '../db'

const router = express.Router()

router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id
        if (id) {
            res.json((await db.events.one(id)))
        } else {
            res.json(await db.events.all())
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    let event = req.body
    try {
        const newevent = await db.events.post(event.title,event.description,event.eventtime, event.userid)
        res.json(newevent)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let update = req.body
    try {
        res.json(await db.events.put(update.title,update.description,update.eventtime,req.params.id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.events.remove(id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router