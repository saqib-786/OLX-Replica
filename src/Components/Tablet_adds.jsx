import React from 'react';
import Tablet_1 from '..//Images/Tablet_1.jpg';
import Tablet_2 from '..//Images/Tablet_2.jpg';
import Tablet_3 from '..//Images/Tablet_3.jpg';


class Tabletadd_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Tablet_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 70000</h5>
          <p className="card-text">Ipad for sell with full accesseries</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Tabletadd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Tablet_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 65000</h5>
          <p className="card-text">LG Tablet availiable for sell </p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Tabletadd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Tablet_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 50000</h5>
          <p className="card-text">All Kind of Tablet are availiable </p>
          
        </div>
      </div>
            </div>
        )
    }
}



export{
    Tabletadd_1,
    Tabletadd_2,
    Tabletadd_3,
    
}