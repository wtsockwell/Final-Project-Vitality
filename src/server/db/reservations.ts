import {Query} from './index'

const get = async (eventid:string) => Query('CALL spGetReservations(?)',[eventid])

const post = async (userid:string, eventid:string) => Query('INSERT INTO reservations(userid, eventid) VALUES(?,?)',[userid,eventid])

const remove = async (userid:string, eventid:string) => Query('DELETE FROM reservations WHERE userid=? AND eventid=?',[userid,eventid])

export default {
    get,
    post,
    remove
}