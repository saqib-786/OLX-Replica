import React from 'react';
import Bike_1 from '..//Images/CG 125.jpg';
import Bike_2 from '..//Images/Bike_2.jpg';
import Bike_3 from '..//Images/Bike_3.jpg';

class Bikeadd_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Bike_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 80000</h5>
          <p className="card-text">CG 125 2019 Model</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Bikeadd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Bike_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 250000</h5>
          <p className="card-text">Imported Sport Bike</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Bikeadd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Bike_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 300000</h5>
          <p className="card-text">Imported Sport Bike</p>
          
        </div>
      </div>
            </div>
        )
    }
}

export{
    Bikeadd_1,
    Bikeadd_2,
    Bikeadd_3,
   
}