import * as express from 'express'
import { useRouteMatch } from 'react-router';
import db from '../db'

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


router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id
        if (id) {
            res.json((await db.users.one(id)))
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
    //This section of logic doesn not work as is, but the idea is there. Will come back and fix it
    let premstatus = 0
    if (user.ispremmember == undefined) {
        premstatus = 1
    } else { premstatus = 0 }
    try {
        const newuser = await db.users.post(user.email, user.username, user.password, premstatus)
        res.json(newuser)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let update = req.body
    //This section of logic doesn not work as is, but the idea is there. Will come back and fix it
    let premstatus = 0
    if (update.ispremmember == true) {
        premstatus = 1
    } else { premstatus = 0 }
    try {
        res.json(await db.users.put(update.email, update.username, update.password, premstatus, req.params.id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    let id: string = req.params.id
    try {
        res.json(await db.users.remove(id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export interface ReqUser extends express.Request {
    user: [{
        username: string,
        password: string,
        ispremmember?: number
    }]
}

export default router