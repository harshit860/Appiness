import authdata from './../json/logincred.json'
import {LOGIN, LOGOUT} from "./Actionauth"
console.log(authdata)

var auth ={
    isAuth:false
}

const authreducer = (state = auth,actions)  =>{
    if(actions.type == LOGIN)
    {
        if( authdata.username === actions.payload.username)
        {
            if(authdata.password === actions.payload.password)
            {
                localStorage.setItem('username',actions.payload.username)
                localStorage.setItem('password',actions.payload.password)
                return {
                    isAuth:true
                }
            }
            else
            {
                alert('Password Wrong')
            }
        }
       
      

    }
    if(actions.type == LOGOUT)
    {
        localStorage.setItem('username','')
                localStorage.setItem('password','')
        return {
            isAuth:false
        }
      

    }
    return state
}

export default authreducer