import config from '../config';
import * as mysql from 'mysql';
import users from './users';
import blogs from './blogs';
import recipes from './recipes';
import events from './events';
import reservations from './reservations';

export const Pool = mysql.createPool(config.DevEnv.mysql)

export const Query = (query:string, values?:Array<string|number>)=>{
    return new Promise((resolve,reject)=>{
        Pool.query(query,values,(err,result)=>{
            if (err) reject(err);
            return resolve(result)
        })
    })
}

export default {
    users,
    blogs,
    recipes,
    events,
    reservations
}