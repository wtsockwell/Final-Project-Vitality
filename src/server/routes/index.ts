import * as express from 'express'
import twitter from './twitter'
import users from './userroutes'
import blogs from './blogroutes'
import events from './eventroutes'
import recipes from './reciperoutes'
import reservations from './reservationroutes'

const router = express.Router()

router.use(twitter)
router.use('/users', users)
router.use('/blogs', blogs)
router.use('/events', events)
router.use('/recipes', recipes)
router.use('/reservations', reservations)

export default router