import { Query } from './index'

const all = async () => Query('SELECT title, description, u.username as user FROM recipes r JOIN users u ON u.id= r.userid')

const one = async (id: string) => Query('SELECT title, ingredients, content, u.username FROM recipes r JOIN users u ON u.id = r.userid WHERE r.id=?', [id])

const post = async (title: string, ingredients: string, content: string, userid: string, description: string) => Query('INSERT INTO recipes(title,ingredients,content,userid,description) VALUES(?,?,?,?,?)', [title, ingredients, content, userid, description])

const put = async (title: string, ingredients: string, content: string, description: string, id:string) => Query('UPDATE recipes SET title=?,ingredients=?,content=?,description=? WHERE id = ?',[title,ingredients,content,description, id])

const remove = async (id:string) => Query('DELETE FROM recipes WHERE id=?',[id])

export default {
    all,
    one,
    post,
    put,
    remove
}