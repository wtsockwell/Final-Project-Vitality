import {Query} from './index'

//We can change the style of the date format whenever we need to here. As of now, dates have to be put in as YYYY-MM-DD, but hopefully we can make it a little easier on the front end.

const all = async () => Query('SELECT e.title, e.description,date_format(e.eventtime, "%M %d %Y"),e.id, u.username as user FROM events e JOIN users u on u.id=e.userid')

const one = async (id:string) => Query('SELECT e.title, e.description, date_format(e.eventtime, "%M %d %Y"), e.id, u.username as user FROM events e JOIN users u ON u.id=e.userid where id=?',[id])

const post = async (title:string,description:string,eventtime:string, userid:string) => Query('INSERT INTO events(title,description,eventtime, userid) VALUES(?,?,?,?)',[title,description,eventtime, userid])

const put = async (title:string,description:string,eventtime:string, id:string) => Query('UPDATE events SET title=?, description=?, eventtime=? WHERE id=?',[title,description,eventtime,id])

const remove = async (id:string) => Query('DELETE FROM events WHERE id=?',[id])

export default {
    all,
    one,
    post,
    put,
    remove
}