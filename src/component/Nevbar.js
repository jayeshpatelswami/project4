// import React, { Component } from 'react'

// export class Nevbar extends Component {
//   render() {
    
//     return (
//       <div>
        
//         <nav className="navbar navbar-expand-light bg-dark" >
//         <div className="container-fluid">
//     <Link className="navbar-brand" to="/" style={{color: 'white'}} >News</Link>
    
//     <button className="navbar-toggler" style={{backgroundColor: 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/link">Link</Link>
//         </li>
//       </ul>
//     </div>
//     </div>
    
// </nav>

//       </div>
//     )
//   }
// }

// export default Nevbar


import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';


export default class Nevbar extends Component {
  render() {
    return (
      

      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      
         <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
      </ul>
    </div>
  </div>
</nav>


)
}
}