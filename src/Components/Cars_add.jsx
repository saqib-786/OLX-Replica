import React from 'react';
import Car_1 from '..//Images/Civic.jpg'
import Car_2 from '..//Images/Toyota.jpg';
import Car_3 from '../Images/gold-Car.jpg'

class Caradd_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Car_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 2500000</h5>
          <p className="card-text">Hona Civic for sell</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Caradd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Car_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 3000000</h5>
          <p className="card-text">Toyota Allion for sell</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Caradd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Car_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 800000</h5>
          <p className="card-text">Imprted Sport Car for Sell</p>
          
        </div>
      </div>
            </div>
        )
    }
}



export{
    Caradd_1,
    Caradd_2,
    Caradd_3,
}