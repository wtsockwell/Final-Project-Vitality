import * as express from 'express';
import * as fetch from 'isomorphic-fetch';
import * as dotevn from 'dotenv'

const router = express.Router();
dotevn.config()


router.get('/worldheartfederation', async (req, res, next) => {
    try {
        let response = await fetch('https://api.twitter.com/2/tweets/1376066680032526336?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld', {
            headers: {
                Authorization: `Bearer ${process.env.TW_Bearer}`
            }
        });

        const data = await response.json()
        res.json(data)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)

    }
})

router.get('/americanheartassociation', async (req, res, next) => {
    try {
        let response = await fetch('https://api.twitter.com/2/tweets/1378437148236517381?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld', {
            headers: {
                Authorization: `Bearer ${process.env.TW_Bearer}`
            }
        });

        const data = await response.json()
        res.json(data)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)

    }
})

router.get('/europeansocietyofcardiology', async (req, res, next) => {
    try {
        let response = await fetch('https://api.twitter.com/2/tweets/1377955418354421760?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld', {
            headers: {
                Authorization: `Bearer ${process.env.TW_Bearer}`
            }
        });

        const data = await response.json()
        console.log('test')
        res.json(data)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)

    }
})



export default router;