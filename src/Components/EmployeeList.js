import React from 'react';
import {connect} from 'react-redux'
import {LogoutAction} from './../Redux/Actionauth'

function EmployeeList(props) {
    var data = props.users.user.map((elem) => {
        return <div key={elem.id} className="col-xl-5 m-4 border shadow-lg row p-4">
            <h3 className="col-xl-12 text-left">Name: {elem.name}</h3>
            <p className = "col-xl-4 text-left">Age: {elem.age}</p>
            <p className = "col-xl-6 text-right">Gender: {elem.gender}</p>
            <p className = "col-xl-12 text-left">Email: {elem.email}</p>
            <p className = "col-xl-12 text-left">Phone: {elem.phoneNo}</p>
        </div>
    })
    console.log(props)
    return (
        <div>
            <div className="col-xl-12 row">
                <p className = "display-4 col-xl-8">Employee Details</p>
                <button className="btn btn-danger h-50" onClick={()=>props.log1()}>Logout</button>
            </div>
            <div className="row container col-xl-12 justify-content-center">
                {data}
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        users:state.data.users
    }
}
const mapDispatchToProps = dispatch => {
    
    return {
           log1:()=>dispatch ( LogoutAction ( ) )
    }
   }
   
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
