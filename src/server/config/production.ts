import * as dotenv from 'dotenv';

dotenv.config();


export default {
    mysql:{
        user:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        host:process.env.DB_HOST,
        database:process.env.DB_DATABASE,
        port:process.env.DB_PORT

    },
    twitter:{
        bearer:process.env.TW_Bearer
    }
    

}