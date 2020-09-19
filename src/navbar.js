import React from 'react';


function Navbar() {
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                {
                                    ['Toogle navigation', '', '', ''].map(
                                        string => <span className="sr-only">{string}</span>
                                    )
                                }
                            </button>
                            <div id="nav">
                                <p className="navbar-brand" >Sizes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="active">
                                <p>12 Product(s) found.<span className="sr-only">(current)</span></p>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <div className="dropdown-Order">
                                    Order by
                              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Select
                               <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li key={toString()}><p>Action</p></li>
                                        <li key={toString()}><p>Another action</p></li>
                                        <li key={toString()}><p>Something else here</p></li>
                                        <li key={toString()} role="separator" className="divider"></li>
                                        <li key={toString()}><p>Separated link</p></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;