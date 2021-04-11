import * as express from 'express'
import * as passport from "passport";
import twitter from './twitter'
import users from './userroutes'
import blogs from './blogroutes'
import events from './eventroutes'
import recipes from './reciperoutes'
import reservations from './reservationroutes'

const router = express.Router()

router.use(twitter)



router.use((req, res, next) => {
    passport.authenticate("bearer", { session: false }, (err, user, info) => {
      if (user) req.user = user;
      return next();
    })(req, res, next);
  });


router.use('/events', events)
router.use('/recipes', recipes)
router.use('/reservations', reservations)
router.use('/blogs', blogs)
router.use('/users', users)  




export default router