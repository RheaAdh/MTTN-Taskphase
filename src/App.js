import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import Imp from './components/Imp'
import './App.css';
import fire from "./config/Fire"

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       user:{},
    }
    this.logout=this.logout.bind(this)
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      
      }else{
        this.setState({user:null});
    }})
  }
  logout(){
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        {(this.state.user)?(<Router >
      <div >
        <nav className="navbar sticky-top  navbar-expand-lg navbar navbar-dark bg-dark navbar-static-top" >
    

        <Link to="/" className="navbar-brand" style={{fontFamily: 'Permanent Marker',fontSize:"2rem" ,fontWeight:"bold",}}> MTTN </Link>

      
          

          <div className="" id="navbarNavAltMarkup" >

            <div className="navbar-nav" >

              <a className="nav-item nav-link" class="key"> 
                <Link to="/" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >HOME</Link>
              </a>
              <a className="nav-item nav-link" className="key">
                <Link to="/imp" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >Imp Docs</Link>
              </a>
              
              <a className="nav-item nav-link" class="key">
                <Link to="/" onClick={this.logout} className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >Logout</Link>
              </a>
            </div>
            
          </div>
          
        </nav>
        <br/>
       <div >
       <Route path="/" exact component={Home} />
        <Route path="/imp" exact component={Imp} />
        <Route path="/login" component={Login} />
       </div>
        
      </div>
    </Router>):(<Login/>)}
      </div>
  );
}
}

export default App;



