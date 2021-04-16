import * as fetch from 'isomorphic-fetch';



export let AccessToken: string = localStorage.getItem('token') || null;
export let User:any ={
    userid:localStorage.getItem('userid') || null,
    ispremmember: localStorage.getItem('ispremmember') || null,
    username: localStorage.getItem('username') || null
}

export const json = async<T = any>(uri:string,method:string = 'GET',body?:{}) =>{

    let headers:any = {
        'Content-type': 'application/json'
    }

    if(AccessToken){
        headers['Authorization']  = ` Bearer ${AccessToken}`
    }

    try{
        let result = await fetch(uri,{
            method,
            headers,
            body:JSON.stringify(body)
        })
        if(result.ok){
            return <T>(await result.json())
        }else{
            return false
        }
    }catch(e){

    }
};

export const SetAccessToken =(token:string, user:{} = {userid:undefined,ispremmember:'1'})=>{
    AccessToken = token;
    user = user;
    localStorage.setItem('token',token)
    localStorage.setItem('userid',User.userid)
    localStorage.setItem('ispremmember',User.ispremmember)
    localStorage.setItem('username', User.username)
}