import {Query} from './index'

const all = async () => Query('SELECT b.id, u.username as user, b.title, b.content FROM blogs b JOIN users u ON u.id = b.userid ORDER BY b.id')

const one = async (id:string) => Query('SELECT u.username as user, b.title, b.content FROM blogs b JOIN users u ON u.id = b.userid WHERE b.id =?', [id])

const post = async (title:string,content:string,userid:string) => Query('INSERT INTO blogs(title,content,userid) VALUES(?,?,?)', [title,content,userid])

const put = async (id:string, title:string, content:string) => Query('UPDATE blogs SET title=?, content=? WHERE id=?', [title,content,id])

const remove = async (id:string) => Query('DELETE FROM blogs WHERE id=?', [id])

export default {
    all,
    one,
    post,
    put,
    remove
}