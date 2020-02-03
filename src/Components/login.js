import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {LoginAction} from './../Redux/Actionauth'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
          
        }
    }
    componentDidMount = () =>{
        var username1 = localStorage.getItem('username')
        var password1 = localStorage.getItem('password')
        this.setState({
                username:username1,
                password:password1
        },()=> this.persist())
       
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    persist = () =>{
        if(this.state.username != '' && this.state.password != '')
        {
            this.props.log(this.state)
        }
    }
    handleSubmit = (e) => {

        e.preventDefault()
        this.props.log(this.state)
    }
    render() {
    
        return (
            <div className="conatiner ">
                <h1 className="display-2">Login</h1>
                <form onSubmit={(e) => this.handleSubmit(e)} className = "col-xl-12 justify-content-center">
                    <input name="username" placeholder="Username" type="email" onChange={(e) => this.handleChange(e)} className="col-xl-4 " required></input>
                    <br></br>
                    <input name="password" type="password" placeholder="Password" onChange={(e) => this.handleChange(e)} className="col-xl-4 m-4" required></input>
                    <br></br>
                    <input value="Login" type="submit" className="btn btn-primary"></input>
                </form>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        name: state.data.checkname,
        users: state.users,
        name1:state.auth.name
    }
}

const mapDispatchToProps = dispatch => {
    
 return {
        log:( data )=>dispatch ( LoginAction ( data) )
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);