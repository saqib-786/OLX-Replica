import React from 'react';
import Banglow_1 from '..//Images/Banglow-1.jpg'
import Car_2 from '../Images/gold-Car.jpg'
import Bike_1 from '..//Images/CG 125.jpg'
import phone from '../Images/Smartphones.jpg'
import {Link} from "react-router-dom";
// import Mobile_1 from '..//Images/Ipone.jpg'
// import Mobile_2 from '..//Images/Realme Mobile.jpg'


class Cars extends React.Component{
    render(){
        return(
          <div>
            <div className="card" style={{width: '18rem'}}>
        <img src={Car_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title"> RS 3500000</h5>
          <p className="card-text">Toyota 2018 Model automatic</p>
        </div>
      </div>
          </div>
        )
    }
}


class Mobiles extends React.Component{
  render(){
    return(
      <div>
        <div  className="card" style={{width: '18rem'}}>
        <img  src={phone} className="card-img-top" alt="Car"/>
        <div className="card-body">
          <h5  className="card-title">RS 30000</h5>
          <p className="card-text">All Box Pack Models are availiable </p>
        </div>
      </div>
      </div>
    )
  }
}

class Houses extends React.Component{
  render(){

    return(
      <div>
        <div className="card" style={{width: '18rem'}}>
        <img src={Banglow_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 80000000</h5>
          <p className="card-text">West Open Banglow for sell</p>
          
        </div>
      </div>
      
      </div>
    )
  }
}
class Bikes extends React.Component{
  render(){
    return(
      <div>
        <div className="card" style={{width: '18rem'}}>
        <img src={Bike_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title"> RS 80000</h5>
          <p className="card-text">CG 125 2019 Model for sell</p>
        </div>
      </div>
      
      </div>
    )
  }
}
export{
  Cars,
  Mobiles,
  Houses,
  Bikes
}