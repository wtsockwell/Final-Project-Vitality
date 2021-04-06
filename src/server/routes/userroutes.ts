import * as express from 'express'
import db from '../db'

const router = express.Router()

router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id
        if (id) {
            res.json((await db.users.one(id))[0])
        } else {
            res.json(await db.users.all())
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    let user = req.body
    try {
        const newuser = await db.users.post(user.email, user.username, user.password, user.ispremmember)
        res.json(newuser)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let update = req.body
    try {
        res.json(await db.users.put(update.email, update.username, update.password, update.ispremmember, req.params.id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.users.remove(id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router