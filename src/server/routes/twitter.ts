import * as express from 'express';
import * as fetch from 'isomorphic-fetch';
import * as dotevn from 'dotenv'

const router = express.Router();
dotevn.config()


router.get('/worldheartfederation', async (req, res, next) => {
    try {
        let response = await fetch('https://api.twitter.com/2/users?ids=83809282,105242077,21572529&user.fields=id,location,name,pinned_tweet_id,profile_image_url,username', {
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

router.get('/news/:id', async (req, res, next) => {
    try {
        let response = await fetch(`https://api.twitter.com/2/users/${req.params.id}/tweets?max_results=6&expansions=attachments.media_keys,author_id&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width&user.fields=profile_image_url`, {
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