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

router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id
        if (id) {
            res.json((await db.recipes.one(id)))
        } else {
            res.json(await db.recipes.all())
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    let recipe = req.body
    try {
        const newrecipe = await db.recipes.post(recipe.title, recipe.ingredients, recipe.content, recipe.userid, recipe.description)
        res.json(newrecipe)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let update = req.body
    try {
        res.json(await db.recipes.put(update.title, update.ingredients, update.content, update.description, req.params.id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    let id: string = req.params.id
    try {
        res.json(await db.recipes.remove(id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router