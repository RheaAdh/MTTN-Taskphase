import React from 'react'

function Tile(props) {
    return (
        <div>
      <div className='col'>
        <div className='card' style={{marginBottom:"25px"}}>
        <div class="card-body"> 
                        
                <p className="card-text">{props.title}
                </p>
                <a target="_blank" href={props.src} style={{fontWeight:"bold"}} >PDF</a>
            </div>  
            
    </div>
    </div>
    </div>
    
   
    )
}

export default Tile
