import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "../NavbarHR.js";


export default class SubmitASickLeaveRequest extends Component{
    constructor(){
        super();
      
    this.onAddDate=this.onAddDate.bind(this);
    this.onAddMonth=this.onAddMonth.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={

        date:0,
        month:0
        
    }
}

onAddDate(e){
this.setState({
   date: e.target.value
})
}

onAddMonth(e){
this.setState({
    month: e.target.value
})
}

onSubmit(e){
    e.preventDefault();
    const request ={
        date:this.state.date,  
        month:this.state.month

    }
    axios.post('/requestSickLeave',request,{headers:{'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhyLTEiLCJlbWFpbCI6IkBndWMiLCJyb2xlIjoiSFIiLCJpYXQiOjE2MTA1NDI0MTR9.cOHHcKOWqOvZcjQnOnYehK9-ik5V9rRPzSWzBoFtvmU'}})
        .then((res)=>{
            console.log(res.data);
        }).catch((error)=> { 
    console.log(error);
})
window.location="/Success"



}

    render(){
        return(
            <div>
                <Navbar/>
            <div className='container'>
                <nav aria-label="breadcrumb">
            <ol className="breadcrumb alert alert-warning">
              <li className="breadcrumb-item text-warning"><a className="text-warning"href="HomeHR">Home</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="Attendance">Attendance</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="Leaves">Leaves</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="SubmitALeaveRequest">Submit A Leave Request</a></li>
              <li className="breadcrumb-item active text-danger" aria-current="page">Submit a sick leave request </li>
            </ol>
          </nav>
          <h3>Sick Leave Request</h3>
               <form onSubmit={this.onSubmit}>
                   <div className='form-group'>
                       <label>Date </label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.date}
                       onChange={this.onAddDate}
                       placeholder="example: 19 "/>    
                   </div>

                

                   <div className='form-group'>
                       <label>Month</label>
                       <input type="text" required
                       className="form-control"
                       value={this.state.month}
                       onChange={this.onAddMonth}
                       placeholder="example: 4"/>    
                   </div>


            <div className="form-group">
                <input type="submit" value="Submit request" className="btn btn-warning" onClick="/view-profile-hr"/>
            </div>

          
               </form>
            </div>

            </div>
             
          
        )
    }
}