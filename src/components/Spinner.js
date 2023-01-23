 import React, { Component } from 'react' 
 import loading from './loading.gif'
 export class Spinner extends Component {
   render() {
     return (
       <div>
         <img src={loading} className="my-2" style={{display:"block",margin:"auto"}}/>
       </div>
     )
   }
 }
 
 export default Spinner
 