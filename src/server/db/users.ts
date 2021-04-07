import {Query} from './index'

const all = async () => Query('SELECT id, username, email, ispremmember FROM users')

const one = async (id:string) => Query('SELECT username, email, ispremmember FROM users WHERE id=?', [id])

const post = async (email:string, username:string,password:string,ispremmember:number) => Query(`INSERT INTO users(email, username, password, ispremmember) VALUES(?,?,?,?)`,[email,username,password,ispremmember])

const put = async (email:string,username:string,password:string,ispremmember:number, id:string) => Query(`UPDATE users SET email=?, username=?, password=?, ispremmember=? WHERE id=?`, [email, username, password, ispremmember, id])

const remove = async (id:string) => Query('DELETE FROM users WHERE id=?', [id])

export default {
    all,
    one,
    post,
    put,
    remove
}