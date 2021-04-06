import {Query} from './index'

const all = async () => Query('SELECT e.title, e.description,e.eventtime,e.id, u.username as user FROM events e JOIN users u on u.id=e.userid')

const one = async (id:string) => Query('SELECT e.title, e.description, e.eventtime, e.id, u.username as user FROM events e JOIN users u ON u.id=e.userid where id=?',[id])

const post = async (title:string,description:string,eventtime:string, userid:string) => Query('INSERT INTO events(title,description,eventtime, userid) VALUES(?,?,?,?)',[title,description,eventtime, userid])

const put = async (id:string,title:string,description:string,eventtime:string) => Query('UPDATE events SET title=?, description=?, eventtime=? WHERE id=?',[title,description,eventtime,id])

const remove = async (id:string) => Query('DELETE FROM events WHERE id=?',[id])

export default {
    all,
    one,
    post,
    put,
    remove
}