import React from 'react';


function Navbar(){
    return (
<nav className="navbar ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      {
                        ['Toogle navigation','','',''].map(
                        string=><span className="sr-only">{string}</span>
                        )
                       }
                    </button>
                    <div id="nav">
                      <a className="navbar-brand" href="#">Sizes:</a>
                    </div>
                </div>
        </div>

        <div className="col-md-10">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="active">
                     <a href="#">12 Product(s) found.<span className="sr-only">(current)</span></a>
                    </div>
                        <ul className="nav navbar-nav navbar-right">
                            <div className="dropdown-Order">
                              Order by
                              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               Select
                               <span className="caret"></span>
                              </button>
                               <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
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