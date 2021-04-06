import {Query} from './index'

const all = async () => Query('SELECT * FROM events')

const one = async (id:string) => Query('SELECT * FROM events where id=?',[id])

const post = async (title:string,description:string,eventtime:string) => Query('INSERT INTO events(title,description,eventtime) VALUES(?,?,?)',[title,description,eventtime])

const put = async (id:string,title:string,description:string,eventtime:string) => Query('UPDATE events SET title=?, description=?, eventtime=? WHERE id=?',[title,description,eventtime,id])

const remove = async (id:string) => Query('DELETE FROM events WHERE id=?',[id])

export default {
    all,
    one,
    post,
    put,
    remove
}