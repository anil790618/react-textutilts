import React, { Component } from 'react'
 
export class NavBar extends Component {

    render() {
        return (
            <div>
                {/* <Router> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" to="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                             
                              {/* <Switch>
                                <Route path="/">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                </Route>
                                <Route path="/business">
                                <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                                </Route>
                                <Route path="/entertainment">
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                                </Route>
                                <Route path="/general">
                                <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
                                </Route>
                                <Route path="/health">
                                <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                                </Route>
                                <Route path="/science">
                                <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                                </Route>
                                <Route path="/sports">
                                <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                                </Route>
                                <Route path="/entertainment">
                                <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                                </Route>
                                </Switch> */}
                          
                        </ul>
                        </div>
                    </div>
                    </nav>
                    {/* </Router> */}
            </div>
        )
    }
}

export default NavBar
