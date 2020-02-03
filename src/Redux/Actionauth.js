export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const LoginAction = ( payload ) =>(
    {
     type:LOGIN,
     payload
    }
)

const LogoutAction = (  ) =>(
    {
     type:LOGOUT,

    }
)


export {LoginAction,LogoutAction}