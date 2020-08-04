import React, { Component } from 'react';
import fire from '../config/Fire';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div >
        <center>
          <br/>
          <br/>
          <br/>
          <br/>

        <h1>SLCM DOCUMENTS</h1>
       
          {/* <h3>Login/Signup</h3> */}
          <br/>
          <br/>

        <div className="col-md-3" >
        
        <form>
       <div className="form-group">
        
        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       </div>
       Enter a valid email-id
       <br/>
       <br/>
        <div class="form-group">
      
       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
       </div>
       Password must be atleast 6 characters 
       <br/>
       <br/>
       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
       <br/>
       <br/>
       Signup if not registered yet,dont miss out on this amazing chance to get all the documents you need 😁
  </form>
  
  </div>
        </center>
      </div>
      
    );
  }
}
export default Login;