import * as express from 'express'
import db from '../db'

const router = express.Router()

export const isAdmin = (req: ReqUser, res, next) => {
    if (!req.user || req.user.role !== "guest") {
      return res.sendStatus(401);
    } else {
      return next();
    }
  };

router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id
        if (id) {
            res.json((await db.blogs.one(id)))
        } else {
            res.json(await db.blogs.all())
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    let blog = req.body
    try {
        const newblog = await db.blogs.post(blog.title, blog.content, blog.userid)
        res.json(newblog)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let update = req.body
    try {
        const editedblog = await db.blogs.put(req.params.id, update.title, update.content)
        res.json(editedblog)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    let id: string = req.params.id
    try {
        res.json(await db.blogs.remove(id))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export interface ReqUser extends express.Request {
    user: {
      role: string;
    };
  }

export default router