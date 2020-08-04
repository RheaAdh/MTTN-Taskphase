import React, { Component } from 'react'
import Tile from "./Tile"
import notices from "./notices"
import Search from "./Search"

export class Imp extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          search:''
     }
 }
 handleInput=(e)=>{
     this.setState({
         search:e.target.value
     })
 }
 
    render() {
        let filteredNotices=notices.filter((notice)=>{
            return notice.title.toLocaleLowerCase().includes(this.state.search)||notice.title.toLocaleUpperCase().includes(this.state.search)||notice.title.includes(this.state.search)
        })
        return (
            <div>
        <div className="container">
        <h3><center>IMPORTANT DOCUMENTS</center></h3>
      <br/>
      <h6><center><Search handleInput={this.handleInput}/></center></h6>
      <br/>
    

            <div className='row'>
                
                    {
                        filteredNotices.map((notice,i)=>{
                            return <Tile key={i} title={notice.title} src={notice.src} />
                        })
                    }
                
            </div>
        </div>
    </div>
    
        )
    }
}

export default Imp
